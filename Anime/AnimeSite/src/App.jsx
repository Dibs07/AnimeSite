import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";

const App = () => {
  return (
    <div>
      {/* <MyState> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
      
        </Routes>
        
      {/* <Toaster/> */}
      </Router>
      {/* </MyState> */}
    </div>
  );
}

export default App;