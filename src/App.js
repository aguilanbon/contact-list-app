import { SignUpProvider } from './helpers/SignUpContext';
import { Routes, Route } from "react-router-dom";
import './index.css'
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';

function App() {
  return (
    <SignUpProvider>
      <div className="w-screen min-h-screen">

      <Routes>
        <Route path='/' element={ <Login /> }></Route>
        <Route path='signup' element={ <SignUp /> }></Route>
      </Routes>
      </div>
    </SignUpProvider>
  );
}

export default App;
