import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import SelectedCompany from "./pages/SelectedCompany";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);

    // Update body background color based on the theme
    const newBackgroundColor = isDarkMode ? "#f4f6f8" : "#121721";
    document.body.style.backgroundColor = newBackgroundColor;
  };
  return (
    <>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Routes>
        <Route
          path="/"
          element={<Home toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
        />
        <Route
          path="/selectedCompany/:name"
          element={<SelectedCompany isDarkMode={isDarkMode} />}
        />
      </Routes>
    </>
  );
}

export default App;
