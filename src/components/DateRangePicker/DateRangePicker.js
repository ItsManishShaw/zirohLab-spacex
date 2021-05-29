import React from "react";
import { DateRangePicker, DateRange } from "materialui-daterange-picker";
import moment from 'moment';
import EventIcon from '@material-ui/icons/Event';

 
const DateRangeComp = ({
  open,
  setOpen,
  startDate,
  setStartDate,
  endDate,
  setEndDate
}) => {
  const [dateRange, setDateRange] = React.useState({});
  return (
    <div className="flex justify-around space-x-2 border-2 h-7 cursor-pointer " style={{
      width:'fit-content',
      top: '18.5%',
      left:'10%'
    }}>
      <div onClick={()=>setOpen(true)}>
        <EventIcon />
        </div>
      <p className="text-blue-600" onClick={() => setOpen(true)}>{`${startDate} --> ${endDate}`}</p>
    <DateRangePicker
        open={open}
        minDate="01/01/1990"
        maxDate='01/01/2100'
        toggle={() => setOpen(!open)}
        onChange={(range) => { setStartDate(moment(range.startDate).format('YYYY'));setEndDate(moment(range.endDate).format('YYYY')); setDateRange(range);setOpen(false) }}
      />  
        </div>
  );
}
 
export default DateRangeComp;