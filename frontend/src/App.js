import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Patient from "./pages/Patients";
import NavBar from "./components/NavBarComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={<Patient />}
              />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
