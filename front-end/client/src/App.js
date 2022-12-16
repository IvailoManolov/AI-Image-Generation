
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavigationBar from './components/Navbar/NavigationBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
