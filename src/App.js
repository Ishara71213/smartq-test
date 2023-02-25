import "./App.css";

//react hooks and other
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//---------------pages-----------------------------------------
import { LoginAndRegister } from "./pages/LoginAndRegister/LoginAndRegister";
import { DashBoard } from "./pages/DashBoard/DashBoard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LoginAndRegister />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Route>
    )
  );

  return (
    <div className="App">
      {/* <LoginAndRegister /> */}
      {/* <DashBoard /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
