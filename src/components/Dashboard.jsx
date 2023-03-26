import React from 'react'
import ByerProfileChart from './ByerProfileChart'
import DashboardStats from './DashboardStats'
import PopularProducts from './PopularProducts'
import RecentOrders from './RecentOrders'
import TransactionChart from './TransactionChart'

function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStats />
      <div className='flex flex-row gap-4'>
        <TransactionChart />
        <ByerProfileChart />
      </div>
      <div className='flex flex-row gap-4'>
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  )
}

export default Dashboard
