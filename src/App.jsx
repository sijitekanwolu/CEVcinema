import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TicketPage from './pages/TicketPage'



function App() {


return (
<>
  <BrowserRouter ba>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/ticket' element={<TicketPage/>}/>
    </Routes>
  </BrowserRouter >
</>
)
}

export default App