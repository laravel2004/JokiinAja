import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import GamePC from './pages/GamePC';
import GameMobile from './pages/GameMobile';
import ContactUs from './pages/ContactUs';
import Calculator from './pages/Calculator';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home />}  />
        <Route path='/signin' element = {<SignIn />} />
        <Route path='/pcgame' element = {<GamePC />} />
        <Route path='/mobilegame' element = {<GameMobile />} />
        <Route path='/contactus' element = {<ContactUs />} />
        <Route path='/calculator' element = {<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
