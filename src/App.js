import LandingPage from "./page/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewPhoto from "./page/AddNewPhoto";
import Favorites from "./page/Favorites";
import AllPhotos from "./page/AllPhotos";

function App() {
  return (
    <div style={{ backgroundColor: "#F0F2F4", minHeight: " 960px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPhotos />} />
          <Route path="add" element={<AddNewPhoto />} />
          <Route path="favorites" element={<Favorites />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>No Such Page Was Found!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
