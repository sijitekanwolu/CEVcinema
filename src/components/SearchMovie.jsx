import { FaStar, FaClock } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { Button, Card} from 'react-bootstrap'

const SearchMovie = ({query, setQuery, querySearch, search}) => {

    // const [search, setSearch] = useState("");
    // const [searchValue, setSearchValue] = useState("");

    const handleSearch = (ev) =>
    {
        setQuery(ev.target.value);
    }
    
    // const truncate = (str, maxLength, trunc) => {
    //     if (str.length > maxLength) {
    //     return `${str.substring(0, trunc)}...`
    //     } else {
    //     return str;
    //     }
    //     }
   

return (
<div>
    <div className="from-search flex items-center justify-center">
        <form onSubmit={querySearch}>
            <input  
                className='border-red-900 border p-2 w-96 rounded-lg hover:border-red-400'
                value={query}
                type="text"
                onChange={handleSearch}
                placeholder='Search for the movie you want'
            
            />

            <button type='submit'
                className='bg-red-500 hover:bg-red-600 text-white p-2 ml-2  rounded-lg'>Search</button>
        </form>
    </div>
    <div className="flex z-0 flex-wrap mt-5 gap-5 justify-center items-center">
    {search.map((film,index) => (
    <>
    <Card key={index.mal_id} style={{ width: '18rem'}} className='border rounded-lg p-0.5'>
            <Card.Img className='rounded-lg w-80 h-96' variant="top" src={film.images.jpg.image_url} />
            <Card.Body>
                <Card.Title className='font-bold text-lg mt-2'>{film.title}</Card.Title>
                <Card.Title className='font-bold text-lg '>{film.title_japanese}</Card.Title>
                <Card.Text className='text-sm ml-1 '>{film.episodes} episodes</Card.Text>
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
                    <Button className='h-10 w-fit rounded-lg m-4 text-white'>
                        Booking 
                    </Button>

                </div>

            </Card.Body>
        </Card>
        {/* <h2>{film.title}</h2> */}
    </>
   ))}
    </div>
  
</div>
);
}

export default SearchMovie