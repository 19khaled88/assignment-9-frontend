import AdminBookingList from '@/components/ui/AdminBookingManageList'
import BookingList from '@/components/ui/BookingList'
import React from 'react'

const AllBookings = () => {
  return (
    <div>
      <h1 className='text-2xl text-gray-600'>Admin - booking list</h1>
      <AdminBookingList />
      </div>
  )
}

export default AllBookings