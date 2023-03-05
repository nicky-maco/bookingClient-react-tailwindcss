import { Route, Routes } from "react-router-dom";
import Start from "./routers/Start";
import Home from "./components/containers/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} >
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
};

export default App;
