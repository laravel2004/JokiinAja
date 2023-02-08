import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import GamePC from './pages/GamePC';
import GameMobile from './pages/GameMobile';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home />}  />
        <Route path='/signin' element = {<SignIn />} />
        <Route path='/pcgame' element = {<GamePC />} />
        <Route path='/mobilegame' element = {<GameMobile />} />
        <Route path='/contactus' element = {<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
