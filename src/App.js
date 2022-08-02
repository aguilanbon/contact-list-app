import { SignUpProvider } from './helpers/SignUpContext';
import { Routes, Route } from "react-router-dom";
import './index.css'
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Home from './pages/Home/Home';
import Profile from './pages/Home/Profile/Profile';
import { ModalProvider } from './helpers/ModalContext';
import { ContactsProvider } from './helpers/ContactContext';
import { UserProvider } from './helpers/UserContext';
import EditProfile from './pages/Home/Profile/EditProfile';

function App() {
  return (
    <SignUpProvider>
      <ModalProvider>
        <UserProvider>
        <ContactsProvider>
          <div className="w-auto min-h-screen">
            <Routes>
              <Route path='/' element={ <Login /> }></Route>
              <Route path='/signup' element={ <SignUp /> }></Route>
              <Route path='/home' element={ <Home /> }></Route>
              <Route path='/profile' element={ <Profile /> }></Route>
              <Route path='/profile/edit' element={ <EditProfile/> }></Route>
            </Routes>
          </div>
        </ContactsProvider>
        </UserProvider>
      </ModalProvider>
    </SignUpProvider>
  );
}

export default App;
