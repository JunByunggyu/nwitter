import { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [isloggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isloggedIn={isloggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>
  );
}

export default App;
