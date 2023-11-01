import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Booking from "./Booking";
import axios from "axios";

const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `https://car-doctor-server-taupe-tau.vercel.app/checkout?email=${user?.email}`

    useEffect(() => {
       axios.get(url, {withCredentials: true})
       .then(res => {
        setBookings(res.data)
       })
    },[url]);

    const handleDelete = (_id) => {
        const procced = confirm('Are you sure want to delete..??')
        if(procced){
         fetch(`https://car-doctor-server-taupe-tau.vercel.app/checkout/${_id}`, {
             method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
             console.log(data);
             const remaining = bookings.filter(booking => booking._id !== _id)
             setBookings(remaining)
         })
        }
       }

       const handleBookingConfirm = (_id) => {
        fetch(`https://car-doctor-server-taupe-tau.vercel.app/checkout/${_id}`, {
            method: 'PATCH',
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                const remaining = bookings.filter(booking => booking._id !== _id);
                const updated = bookings.find(booking => booking._id === _id)
                updated.status('confirm')
                const newBooking = [updated, ...remaining]
                setBookings(newBooking)
            }
        })
      }

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
    
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
  
        {
            bookings.map(booking => <Booking key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} status={status}></Booking>)
        }
    </tbody>
 
    
  </table>
</div>
        </div>
    );
};

export default Bookings;