import { SignUpProvider } from './helpers/SignUpContext';
import './index.css'
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';

function App() {
  return (
    <SignUpProvider>
      <div className="w-screen min-h-screen">
        {/* <Login /> */}
        <SignUp />
      </div>
    </SignUpProvider>
  );
}

export default App;
