import React, { useEffect, useState } from 'react'
import { selectTicket } from '../supabase/Insert'
import CartTicket from '../components/CartTicket'
import { Dna } from 'react-loader-spinner'

const TicketPage = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState([])

    useEffect(() => {
        const getTicket = async () => {
            const {bookingFilm, error} = await selectTicket()
            if(error) throw new Error(error.message)
            else setData(bookingFilm)
        setLoading(false)
        }
        getTicket()
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])
    console.log(data);

  return (
    <>
    {loading? (
        <div className='justify-center flex flex-col items-center h-screen'>
        <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}}
            wrapperClass="dna-wrapper" />
        <h2 className='mt-2 text-sm'>Loading...</h2>
    </div> ) : (
        <>
        <section>
            <h2 className='text-center font-bold m-5'>Ticket List</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 p-6 mb-8'>
                {
                    data.map(t => (
                        <CartTicket key={t.id} data={t}/>
                    ))
                }
            </div>
        </section>
        </>
    )}
    </>
  )
}

export default TicketPage