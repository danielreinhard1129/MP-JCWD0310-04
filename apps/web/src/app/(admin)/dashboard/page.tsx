import React from 'react'

const Dashboard = () => {
  return (
    <section className='container h-screen w-full'>
      <div className='text-4xl font-bold p-5 mt-10'>
        Dashboard
      </div>
      <hr  className='border-4 border-gray-700'/>
      <div className='w-4/5'>
        <div>Statistic</div>
        <div>Transaction</div>
        <div>event list</div>
        <div>approval</div>
      </div>
      </section>
  )
}

export default Dashboard