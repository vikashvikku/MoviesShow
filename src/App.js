import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SideBar from "./components/Sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import BookMarks from "./components/Sidebar/BookMarks/BookMarks";
import Dashboard from "./page/Dashboard";
import Detail from "./components/Trending/Card/Detail";

function App() {
  return (
    <div className="App">
      <div className="components">
        <SideBar />
        <div>
          <SearchBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/bookmarks" element={<BookMarks />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
