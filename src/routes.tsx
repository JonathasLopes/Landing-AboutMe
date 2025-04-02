import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './Pages/Landing';

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/:locale" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;