
import './App.css';
import Booklist from './components/Bookslist';
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import { globalStyles } from './styles/globalStyles';
import Logo from './logo.svg'

function App() {
  const name = "Krups";
  return (
    <>
    <img src={Logo} alt="logo" />
      <BrowserRouter>
      <div 
      // style={{
      //   padding: 10, display: "flex", justifyContent: "space-between", width: 120
      // }}
      // className="navbar"
      style={{ ...globalStyles.navbar,}}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/books'>BookList</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<Homepage username={name}/>}></Route>
        <Route path='/books' element={<Booklist />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      </BrowserRouter>

      </>
  
  );
}

export default App;
