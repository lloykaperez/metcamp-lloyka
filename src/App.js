import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import AboutMe from './pages/aboutMe';
import FourOFour from './pages/404';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={<Game/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='*' element={<FourOFour/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
