import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './Pages/Landing';

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;