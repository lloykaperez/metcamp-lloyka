import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import AboutMe from './pages/aboutMe';
import FourOFour from './pages/404';
import packageInfo from '../package.json';

function App() {

  return (
    <BrowserRouter basename={getBasename()}>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={<Game/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='*' element={<FourOFour/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function getBasename(){
  const array = packageInfo.homepage.split("/");
  return array[array.length-1];
}

export default App;
