import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Itineraries from './pages/Itineraries';
import Destinations from './pages/Destinations';


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/itineraries' element={<Itineraries/>}/>
      <Route path='/destinations' element={<Destinations/>}/>
    </Routes>
    </>
  )
}

export default App;
