import logo from './logo.svg';
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Login from './component/Login';
import Message from './component/Message';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/message' element={<Message/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
