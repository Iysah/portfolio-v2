import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import HomePage from "./home";
import Podcast from "./podcast";

function App() {

  return (
    <>
      {/* <PreLoader /> */}
      <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/podcast" element={<Podcast />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
