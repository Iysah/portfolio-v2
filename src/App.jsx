import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import StateContextProvider from '../context/StateContext'
import { Toaster } from "react-hot-toast";

import HomePage from "./home";
import Podcast from "./podcast";
import Product from "./product";
import Shop from "./shop";


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/product/:slug"
            element={<Product />}
          />
        {/* <Toaster /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
