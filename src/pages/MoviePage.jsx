import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { FaStar, FaClock } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { Button, Card, Modal} from 'react-bootstrap'
import SearchMovie from '../components/SearchMovie'
import { Dna } from 'react-loader-spinner';
import { InsertTicket } from '../supabase/Insert';
import Swal from 'sweetalert2';





const MoviePage = () => {

const [selectMovie, setSelectMovie] = useState(null)
const [data, setData] = useState([])

const [nama, setName] = useState("")
const [cinema, setCinema] = useState()
const [date, setDate] = useState("")

const handleName = (e) => setName(e.target.value)
const handleCinema = (e) => setCinema(e.target.value)
const handleDate = (e) => setDate(e.target.value)

const [show, setShow] = useState(false);

const handleBook = (data) => {
    setSelectMovie(data)
    handleShow()
}

const handleSubmit = async (e) => {
    e.preventDefault()
    if(!nama || !date) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill all the fields!',
        })
        setLoading(false)
        return;
    }
        const { error } = await InsertTicket(selectMovie.title, selectMovie.type, nama, cinema, date, sele.images.jpg.image_url)
        if (!error) {
            setLoading(false)
            handleClose()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Successfully added ${data.title} to your list`,
                showConfirmButton: false,
                timer: 3000,
            })
        } else {
            setLoading(false)
            handleClose()
            alert(`Error: ${error}`);
        }
        console.log(selectMovie.images.jpg.image_url);
}



// console.log(selectMovie);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [currentPage, setCurrentPage] = useState(1)
const [itemPerPage] = useState(6)
const indexOfLastItem = currentPage*itemPerPage
const indexOfFirstItem = indexOfLastItem-itemPerPage
const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
}

const [loading, setLoading] = useState(true)


const getData = async() => {
const res = await axios.get(`https://api.jikan.moe/v4/top/anime?rating=pg`)
setData(res.data.data)
}

const truncate = (str, maxLength, trunc) => {
if (str.length > maxLength) {
return `${str.substring(0, trunc)}...`
} else {
return str;
}
}

const [search, setSearch] = useState([])
const [query, setQuery] = useState("")

const querySearch = async(e) => {
    e.preventDefault()

    const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`)

    console.log(res.data.data)
    setSearch(res.data.data)
 }

useEffect(() => {
getData();
setTimeout(() =>{
setLoading(false)
}, 3000)
}, []);

// console.log(data);
// const handleSearch = (e) => setQuery(e.target.value)



return (
<section className='movie' id='movie'>
    <br />
    <h2 className='text-3xl font-bold text-center'>MOVIE</h2>

    <section id='search' className='flex flex-col items-center mt-5'>
    <SearchMovie setQuery={setQuery} query={query} querySearch={querySearch} search={search} /> 
    </section>
    <>
    {loading ? (
        <div className='justify-center flex flex-col items-center h-screen'>
        <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}}
            wrapperClass="dna-wrapper" />
        <h2 className='mt-2 text-sm'>Loading...</h2>
    </div> ): (
        <>
        <div className="flex z-0 flex-wrap mt-5 gap-5 justify-center items-center">
        {currentData.map((film,index) => (
        <Card key={index.mal_id} style={{ width: '18rem'}} className='border rounded-lg p-0.5'>
            <Card.Img className='rounded-lg w-80 h-96' variant="top" src={film.images.jpg.image_url} />
            <Card.Body>
                <Card.Title className='font-bold text-lg mt-2'>{truncate(film.title,19,19)}</Card.Title>
                <Card.Title className='font-bold text-lg '>{truncate(film.title_japanese,10,10)}</Card.Title>
                <Card.Text className='text-sm ml-1 '>{film.episodes} episodes</Card.Text>
                <Card.Text className='text-sm mt-4'>{truncate(film.synopsis,100,100)}</Card.Text>
                <Card.Text className='flex gap-1 text-sm '><FaClock color='#3C486B' />{film.duration}</Card.Text>
                <div className="flex">
                    <Card.Text className='flex text-sm  gap-1'>
                        <FaStar color='#FFC436' /> {film.score}</Card.Text>
                    <Card.Text className='flex text-sm ml-3 gap-1'>
                        <MdFavorite color='#D80032' /> {film.favorites}</Card.Text>
                    <Card.Text className='flex text-sm ml-3 gap-1'>
                        <FaRankingStar color='#F99B7D' /> {film.rank}</Card.Text>
                </div>
                

                <div className='flex flex-col justify-center items-center'>
                    <Button className='h-10 w-fit rounded-lg m-4 text-white' onClick={() => handleBook(film)}>
                        Booking 
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>TICKET</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={handleSubmit}>
                        <Modal.Body className="space-y-2 md:space-y-2">
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                                type="text"
                                value={film.title}
                                disabled
                                
                            />
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                                type="text"
                                value={film.type}
                                disabled
                                
                            />
                            <input 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                            type="text" 
                            onChange={handleName}
                            placeholder='Masukan nama anda'
                            />

                            <div className="flex flex-col py-3 w-full gap-3">
                                <h5>Cinema</h5>
                                <div className="flex justify-center gap-4">
                                <div className="flex gap-2 justify-center items-center">
                                        <input
                                            type="radio"
                                            name="type"
                                            id="Reguler"
                                            checked={cinema === "Reguler"}
                                            value="Reguler"
                                            onChange={handleCinema}
                                            
                                        />
                                        <label
                                            className="font-medium text-blue-gray-700"
                                            htmlFor="Reguler"
                                        >
                                            Reguler
                                        </label>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center">
                                        <input
                                            type="radio"
                                            name="type"
                                            id="VIP"
                                            checked={cinema === "VIP"}
                                            value="VIP"
                                            onChange={handleCinema}
                                            
                                        />
                                        <label
                                            className="font-medium text-blue-gray-700"
                                            htmlFor="VIP"
                                        >
                                            VIP
                                        </label>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center">
                                        <input
                                            type="radio"
                                            name="type"
                                            id="Premium"
                                            checked={cinema === "Premium"}
                                            value="Premium"
                                            onChange={handleCinema}
                                            
                                        />
                                        <label
                                            className="font-medium text-blue-gray-700"
                                            htmlFor="Premium"
                                        >
                                            Premium
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                            <input 
                            type="date" 
                            id="dateSchedule"
                            onChange={handleDate}
                            isTitle
                            titleInput="Select Date"
                            />
                            </div>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            {
                                loading ?
                                    <Button variant="secondary" disabled>
                                        Close
                                    </Button>
                                    :
                                    <Button variant="secondary">
                                        Close
                                    </Button>

                            }
                            {
                                loading ?
                                    <Button className='text-sm' variant="primary" disabled>
                                        Loading...
                                        <Dna
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="dna-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="dna-wrapper"/>
                                    </Button>
                                    :
                                    <Button type="submit" value={handleSubmit} variant="primary">
                                        Booking
                                    </Button>
                                    
                            }
                        </Modal.Footer>
                    </form>
                </Modal>


                </div>

            </Card.Body>
        </Card>
        ))}
        
        <div className="flex pagination mb-4">
          <ul className="flex justify-center gap-3">
            {Array.from({
              length: Math.ceil(data.length / itemPerPage),
            }).map((_, index) => (
              <li className="border border-black rounded-lg" key={index}>
                <button
                  className={`bg-red-300 rounded-lg hover:bg-red-600 text-white font-semibold py-2 px-4 transition duration-300 ${
                    currentPage === index + 1 ? "bg-red-600" : ""
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>

    </div>

    
        </>
    )}
    </>
    
   



</section>
)
}



export default MoviePage