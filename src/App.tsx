import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.tsx';
import NewQuote from './containers/NewQuote/NewQuote.tsx';
import EditQuote from './containers/EditQuote/EditQuote.tsx';


const App = () => {

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/quotes/category/:category" element={<Home/>} />
          <Route path='/add/new-quote' element={<NewQuote/>}/>
          <Route path='/quotes/:idQuote/edit' element={<EditQuote/>}/>
          <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>
      </Container>
    </>
  );
};

export default App;
