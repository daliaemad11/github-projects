import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/homepage';
import Collections from './pages/collections';
import Men from './pages/men';
import Women from './pages/women';
import About from './pages/about';
import Contact from './pages/contact';

function App() {

  return (
    <>
    <main>
         <BrowserRouter>
         <Routes>
             <Route path='/' element={<Homepage/>}>
                <Route path="/collections" element={<Collections/>}/>
                <Route path="/men" element={<Men/>}/>
                <Route path="/women" element={<Women/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
             </Route>
         </Routes>
         </BrowserRouter>
         </main>
         </>
  )
}

export default App
