import React from 'react'
import Table from '../../components/TableComp/TableComp'


const Dashboard = ({ title }) => {
  return (
    <div className="flex flex-col content-center items-center w-full h-full">
      <div className='w-full text-blue-600 text-center mx-auto font-bold text-5xl pb-5 border-b-2  '>
      <p>{title}</p>
      </div>
        <Table/>
    </div>
  )
}

export default Dashboard
