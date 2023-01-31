import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./routes/NavBar";
import SignIn from "./routes/SignIn";
import Shop from "./routes/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
