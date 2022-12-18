
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import NavigationBar from './components/Navbar/NavigationBar';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
