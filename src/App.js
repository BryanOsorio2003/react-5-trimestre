import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { Main } from './Components/Page/Main/Main';
import { AboutUS } from './Components/Page/AboutUS/AboutUS';
import { Contact } from './Components/Page/Contact/Contact';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/AboutUS' element={<AboutUS/>}/>
        <Route path='/AboutUS' element={<Contact/>}/>        
      </Routes>
    </BrowserRouter>
  );
  }

export default App;
