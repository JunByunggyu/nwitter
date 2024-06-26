import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

const AppRouter = ({ isloggedIn }) => {
  return (
    <Router>
      <Routes>
        {isloggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
        <Route />
      </Routes>
    </Router>
  );
};

export default AppRouter;
