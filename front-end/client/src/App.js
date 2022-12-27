
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import NavigationBar from './components/Navbar/NavigationBar';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [user,setUser] = useState("null")
  return (
    <div className="App">
      <Router>
        <NavigationBar user = {user} setUser = {setUser}/>
        <Routes>
          <Route path="/" element={<Home user = {user}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn setUser = {setUser}/>}/>
        </Routes>
      </Router>
      <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />

    </div>
  );
}

export default App;
