import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Toaster } from 'react-hot-toast';
import Myth from './pages/Myth';
import Temple from './pages/Temple';
import Char from './pages/Char';
import Fest from './pages/Fest';
import Episodes from './pages/Episodes';
import Story from './pages/Story';
import Temp_Story from './pages/Temp_Story';
import Fest_Story from './pages/Fest_Story';
import Char_Story from './pages/Char_Story';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/mythological-stories' element={<Myth />} />
        <Route path='/mythological-stories/episodes' element={<Episodes />} />
        <Route path='/mythological-stories/episodes/{1}' element={<Story />} />
        <Route path='/temples' element={<Temple />} />
        <Route path='/temples/{1}' element={<Temp_Story />} />
        <Route path='/characters' element={<Char />} />
        <Route path='/characters/{1}' element={<Char_Story />} />
        <Route path='/festivals' element={<Fest />} />
        <Route path='/festivals/{1}' element={<Fest_Story />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
