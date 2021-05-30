import React from "react";

const GetColumn = () => {
  const commonHeaderStyle = `font-normal  mx-auto text-center  `;
  const columns = [
    {
      name: <p className={`${commonHeaderStyle} `}>Sl.no</p>,
      selector: "sl",
      sortable: false,
      cell: row => {
        return (
          <div
            className={
              `w-full mx-auto text-left flex space-x-2 justify-center ml-4 `
            }
          >
            <p
            >
              {row?.serial_number || "--"}
            </p>
          </div>
        );
      },
    },
    {
      name: <p className={`${commonHeaderStyle}`}>Lounched UTC</p>,
      selector: "Lounched",
      sortable: false,
      cell: row => {
        return (
          <div
            className={
              `w-full mx-auto text-left flex justify-start `
            }
          >
            <p style={{
              wordBreak:'keep-all'
            }}
            >
              {row?.launch_date_local || "--"}
            </p>
          </div>
        );
      },
    },
    {
      name: (
        <span className={`${commonHeaderStyle}`}>
          Location
        </span>
      ),
      selector: "location",
      sortable: false,
      cell: row => (
        <div
          data-tag="allowRowEvents"
          className={
            "w-full mx-auto text-center " 
          }
        >
       {row?.launch_site?.site_name||'--'}
        </div>
      ),
    },
    {
      name: (
        <p className={`${commonHeaderStyle} `}>Mission</p>
      ),
      selector: "mission",
      sortable: false,
      cell: row => {
        return (
          <div
            data-tag="allowRowEvents"
            className={
              "w-full mx-auto text-center " 
            }
          >
            {row?.mission_name||'--'}
          </div>
        );
      },
    },
    {
      name: <p className={`${commonHeaderStyle}`}>Orbit</p>,
      selector: "orb",
      sortable: false,
      cell: row => (
        <div
          data-tag="allowRowEvents"
          className={
            "w-full mx-auto text-center"
          }
        >
          {row?.rocket?.second_stage?.payloads[0].orbit||'--'}
        </div>
      ),
    },
    {
      name: <p className={`${commonHeaderStyle} `}>Launch Status</p>,
      selector: "status",
      sortable: false,
      cell: row => (
        <div
          data-tag="allowRowEvents"
          className={
            "w-full mx-auto text-center "
          }
        >
          {(row?.launch_success===null?'Upcoming':row?.launch_success===true? 'Success' : 'Failed')||'--'}


        </div>
      ),
    },
    {
      name: <p className={`${commonHeaderStyle} text-center`}>Rocket</p>,
      selector: "roc",
      sortable: false,
      cell: row => (
        <div
          data-tag="allowRowEvents"
          className={
            "w-full mx-auto text-center "
          }
        >
          {row?.rocket?.rocket_name||'--'}

        </div>
      ),
    },
  ];
  return columns;
};
export default GetColumn;
