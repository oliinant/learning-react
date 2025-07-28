import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Login/LoginPage.jsx";
import HomePage from "./HomePage.jsx";
import SignUp from "./Login/SignUp.jsx"
const App = () => {
  return( 
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />}  />
        <Route path="/login/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  </div>
  )
};

export default App;
