import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Admin/sidebar'
import UserDetails from '../components/Admin/userDetails'
import PaperPublish from '../components/Admin/paperpublish';
import FeedbackDetails from '../components/Admin/feedbackDetails';
import PaperDetails from '../components/Admin/PaperDetails';

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 overflow-y-auto">
        <Routes>
           <Route path="/paperpublish" element={<PaperPublish />} /> 
           <Route path="/feedbackDetails" element={<FeedbackDetails />} />
           <Route path="/paperDetails" element={<PaperDetails />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
      </div>
    </div>
  )
}
