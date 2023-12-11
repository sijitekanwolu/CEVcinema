import { supabase } from "./Ticket";

const InsertTicket = async (movie, type, username, cinema,  date, image_url) => {
    const {data, error} = await supabase
    .from('bookingFilm')
    .insert([
        {customerName : username, movie : movie, type : type, cinema : cinema, date : date, image_url : image_url}
    ])
    .select()
    console.log(data);
    return {error}
} 

const selectTicket = async () => {
    let {data: bookingFilm, error} = await supabase
    .from('bookingFilm')
    .select('*')
    return {bookingFilm, error}
}
const deleteCustomer = async (id) => {
    const { error } = await supabase
      .from('bookingFilm')
      .delete()
      .eq('id', id)
    return { error }
  
  }
export{
    InsertTicket,
    selectTicket,
    deleteCustomer
}
