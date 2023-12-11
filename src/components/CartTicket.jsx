import React from 'react'
import Swal from 'sweetalert2';
import { deleteCustomer } from '../supabase/Insert';

const CartTicket = ({data}) => {
    
    function formatDate(dateString) {
        const options = { weekday: 'long', month: 'short', day: '2-digit', year: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    }
    const handleCancelBooking = async () => {
        // confirm cancel book
        await Swal.fire({
            title: `Are you sure to Cancel Booking?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { error } = await deleteCustomer(data.id)
                if (!error) {
                    await Swal.fire({
                        title: 'Success!',
                        text: `Your booking has been cancelled`,
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false,
                        timerProgressBar: true
                    })
                    window.location.reload()
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: `${error.message}`,
                        icon: 'error',
                        timer: 3000,
                        showConfirmButton: false
                    })
                }
            } else {
                Swal.fire({
                    title: 'Canceled!',
                    text: `Your booking is safe!`,
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                })
            }
        })
       
    }

  return (
    <div
            className="flex flex-wrap border-1 rounded-lg justify-center items-center">
            <a href="#!">
                <img
                    className="rounded-2  object-object-fit-cover w-60 h-80 m-2  "
                    src={data.image_url}
                    alt="Skyscrapers" />
            </a>
            <div className="p-6">
                <h5
                    className="mb-2 leading-tight text-neutral-800 text-center font-Poppins font-semibold">
                    {data.movie}
                </h5>
                <div className=" flex w-full">
                    <div className="flex flex-col w-full justify-between">
                        <p className="text-sm">
                            Customer : {data.customerName}
                        </p>
                        <p className="text-sm">
                            Cinema : {data.cinema}
                        </p>
                        <p className="text-sm">
                            Date : {formatDate(data.date)}
                        </p>
                    </div>
                </div>
                <button onClick={handleCancelBooking} className="w-full bg-red-800 text-white p-2 rounded-md hover:bg-red-900 transition-all duration-100" type='button'>
                    Cancel Booking
                </button>
            </div>
            <div className="p-3 text-white">
                {/* button cancel book*/}
                
            </div>
        </div>
  );
};


export default CartTicket