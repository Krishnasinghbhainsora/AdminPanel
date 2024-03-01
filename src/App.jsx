import { createContext, useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import ReactSwitch from "react-switch";


export const ThemeContext = createContext(null);

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="grid-container" id={theme}>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
          <Home />
        <div className="switch">
          <label>{theme == "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch className="switchbox" onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
        {/* <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Home /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
