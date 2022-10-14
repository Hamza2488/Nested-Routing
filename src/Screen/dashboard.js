import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feedback from './dashborad_screen/feedback'
import { Messages } from './dashborad_screen/messages'
import { Notification } from './dashborad_screen/notification'

const Dashboard = () => {
    return (
        <>
            <div>Dashboard</div>

            <Routes>
                <Route path="messages" element={<Messages />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="notification" element={<Notification />} />
            </Routes>

        </>


    )
}

export default Dashboard