import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import HomePage from "./HomePage.jsx";
const App = () => {
  return( 
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />}  />
      </Routes>
    </Router>
  </div>
  )
};

export default App;
