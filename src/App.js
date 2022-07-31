import { SignUpProvider } from './helpers/SignUpContext';
import { Routes, Route } from "react-router-dom";
import './index.css'
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Home from './pages/Home/Home';
import Profile from './pages/Home/Profile/Profile';

function App() {
  return (
    <SignUpProvider>
      <div className="w-auto min-h-screen">

      <Routes>
        <Route path='/' element={ <Login /> }></Route>
        <Route path='/signup' element={ <SignUp /> }></Route>
        <Route path='/home' element={ <Home /> }></Route>
        <Route path='/profile' element={ <Profile /> }></Route>
      </Routes>
      </div>
    </SignUpProvider>
  );
}

export default App;
