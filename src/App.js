import Forms from './components/Forms.js';
import Home from './components/Home.js';
import AddPage from './components/AddPage.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  
  return (

    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Forms />} />
          <Route path="/addpage" element={<AddPage />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
