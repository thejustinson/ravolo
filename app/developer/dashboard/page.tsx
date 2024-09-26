import DashBoardContent from '@/app/components/DashBoardContent'
import NavBar from '@/app/components/NavBar'
import Onboard from '@/app/components/Onboard'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='px-10'>
        <NavBar/>
        {/* <Onboard/> */}

        <DashBoardContent/>
    </div>
  )
}

export default Dashboard