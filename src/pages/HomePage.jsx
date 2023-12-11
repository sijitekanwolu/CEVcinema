import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import MoviePage from './MoviePage'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'


const HomePage = () => {
    // const [movie, setMovie] = useState([]);
    // const [page, setPage] = useState(movie.pagination?.current_page || 1);
    // const [totalPages, setTotalPages] = useState(1);
    // const handlePagination = async (event, value) => {
    //     setPage(value);
    // };
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         window.scrollY > 10 ? setIsScrolling(true) : setIsScrolling(false);
    //     });
    // }, []);
    // useEffect(() => {
    //     const getData = async () => {
    //         console.log(page);
    //         setIsLoading(true);
    //         const data = await getMovie("", page);
    //         if (data && data.pagination) {
    //             setMovie(data);
    //             setTotalPages(data.pagination.last_visible_page);
    //         }
    //     };
    //     getData();
    // }, [page]);
return (
<>
    <Header />
    <section className='bg-home h-screen w-100' id='home'>
        <div className='flex flex-col justify-center items-start h-screen ml-9'>
            <h2 className='text-5xl font-bold text-center text-white'>Welcome</h2>
            <p className='text-white text-lg text-center'>Millions of movies , TV shows and people to discover. Order
                ticket now.</p>
            <a href='#movie'
                className=' no-underline flex bg-red-500 hover:bg-red-600 w-40 h-10 text-center justify-center items-center rounded-lg text-white'>ORDER
                A TICKET!</a>

        </div>
    </section>
    <MoviePage />
    <FAQ/>
    <Footer />
</>
)
}

export default HomePage