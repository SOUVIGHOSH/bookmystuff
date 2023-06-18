import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faDoorOpen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import UserPicker from "./components/Users/UserPicker";
import BookingsPage from "./components/Bookings/BookingsPage";
import UsersPage from "./components/Users/UsersPage";
import BookablesPage from "./components/Bookables/BookablesPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(1);
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <Link to="/bookings" className="header-menu">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>Bookings</span>
            </Link>
            <Link to="/bookables" className="header-menu">
              <FontAwesomeIcon icon={faDoorOpen} />
              <span>Bookables</span>
            </Link>
            <Link to="/users" className="header-menu">
              <FontAwesomeIcon icon={faUsers} />
              <span>Users</span>
            </Link>
          </nav>
          <UserPicker onChange={setUser} />
        </header>
        <main>
          <Routes>
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/bookables" element={<BookablesPage />} />
            <Route path="/users" element={<UsersPage user={user} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
