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
        <Route path='/characters' element={<Char />} />
        <Route path='/festivals' element={<Fest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
