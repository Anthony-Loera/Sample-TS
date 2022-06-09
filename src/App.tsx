import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./styled/Appbar";
import Homepage from "./views/Homepage";
import Userprofile from "./views/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Appbar>My App</Appbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users/:id" element={<Userprofile />} />
        <Route path="/posts/:id" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
