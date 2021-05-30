import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import moment from 'moment';
import DataTable from "react-data-table-component";
import GetColumn from './Coloumn';
import NewSpinner from '../Spinner/Spinner'
import Modal from '../Modal/modal'
import DateRangeComp from '../DateRangePicker/DateRangePicker'
import './TableComp.css';

const axiosConfig = {
  baseURL: 'https://api.spacexdata.com',
  timeout: 3600 * 5000,
};
export const LemsAPI = Axios.create(axiosConfig);

const TableComp = () => {
  const [loading, setLoading] = useState(true);
  const [tableData, settableData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(20 );
  const [startDate, setStartDate] = useState(moment('1900').format("YYYY"));
  const [endDate, setEndDate] = useState(moment('3000').format("YYYY"));
  const [launchType, setLaunchType] = useState('all');
  const [show, setShow] = useState(false);
  const [modalData,setModalData]=useState('')

  useEffect(() => {
    setLoading(true);
    LemsAPI.get('https://api.spacexdata.com/v3/launches').then(res => {
      res && settableData([...res?.data.filter((el, i, arr) => {
        return parseInt(moment(el?.launch_date_local).format('YYYY')) >= parseInt(startDate) &&
          parseInt(moment(el?.launch_date_local).format('YYYY')) <= parseInt(endDate)
      })].filter((el, i) => launchType !== 'all' ? el?.launch_success === (launchType === 'Upcoming' ? null:launchType==='success'?true:false):true).map((each, index) => {
              each["serial_number"] = index + 1;
              return each;
            }) || []);
      setLoading(false);
    }).catch(err => { settableData([]); setLoading(false) });
    return () => {
    }
  }, [startDate,endDate,launchType])



  return (
    <>
    <div className="tableContainer mt-16 flex flex-col ">
      <div className="flex flex-row justify-between items-center content-center w-full mb-3">
        <DateRangeComp
          open={open}
          setOpen={setOpen}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}/>
        <div className="flex justify-around border-2 ml-auto  ">
          <select name="launches" id="launches" onChange={(e) => { setLaunchType(e.target.value) }}>
            <option value="all">All Launches</option>
            <option value='Upcoming'>Upcoming Launches</option>
            <option value='success'>Successful Launches
            </option>
            <option value="fail">Failed Launches</option>
          </select>
        </div>
      </div>
      <DataTable
        columns={GetColumn(startDate, endDate)}
          onRowClicked={rows => {
            setShow(true)
            setModalData(rows);
         
        }}
            progressPending={loading}
            data={tableData}
            pointerOnHover
            persistTableHead
            highlightOnHover
            ignoreRowClick={false}
            paginationTotalRows={tableData.length}
            pagination 
            progressComponent={
              <div className="py-8">
                <NewSpinner />
              </div>
            }
            paginationPerPage={rowsPerPage}
        />
      </div>
      <Modal
            show={show}
            setShow={setShow}
            noCloseBtn={true}
            xl={true}
            styleContainer={{ maxHeight: "95vh" }}
            title="Launch details in JSON format"
            titleStyle={{ paddingLeft: "20px" }}
            clickOutsideClose={false}
      >
        <div>
          {JSON.stringify(modalData,null,2)}
          </div>
          </Modal>
    </>
  )
}

export default TableComp;