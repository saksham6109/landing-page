import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Profile from "./components/SideBar pages/Profile";
import Ecommerce from "./components/SideBar pages/Ecommerce";
import User from "./components/SideBar pages/User";  
import Dashboard2 from "./components/SideBar pages/Dashboard2";
import Documentation from "./components/SideBar pages/Documentation";
import Core from "./components/SideBar pages/Core";
import Tables from "./components/SideBar pages/Tables";
import UiElements from "./components/SideBar pages/UiElements";
import Form from "./components/SideBar pages/Form";
import Charts from "./components/SideBar pages/Charts";
import Grid from "./components/SideBar pages/Grid";
import Maps from "./components/SideBar pages/Maps";
import Extra from "./components/SideBar pages/Extra";
import MenuLevels from "./components/SideBar pages/MenuLevels";
import Library from "./components/SideBar pages/Library";
import Support from "./components/SideBar pages/Support";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      
      {/* Dashboard Route */}
      <Route path="/dashboard" element={<Dashboard />}>
        {/* Default redirect to Profile */}
        <Route index element={<Profile />} />

        {/* Other Dashboard Routes */}
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard2 />} />
        <Route path="ecommerce" element={<Ecommerce />} />
        <Route path="user" element={<User />} /> 
        <Route path="documentation" element={<Documentation />} />
        <Route path="core" element={<Core />} />
        <Route path="tables" element={<Tables />} />
        <Route path="ui-elements" element={<UiElements />} />
        <Route path="forms" element={<Form />} />
        <Route path="charts" element={<Charts />} />
        <Route path="grid" element={<Grid />} />
        <Route path="maps" element={<Maps />} />
        <Route path="extra" element={<Extra />} />
        <Route path="menu-levels" element={<MenuLevels />} />
        <Route path="library" element={<Library />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;
