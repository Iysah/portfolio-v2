import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import HomePage from "./home";
import Podcast from "./podcast";
import Shop from "./shop";

function App() {

  return (
    <>
      {/* <PreLoader /> */}
      <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
