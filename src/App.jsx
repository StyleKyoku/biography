import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Education from "./pages/Education/Education.jsx";
import Hobbies from "./pages/Hobbies/Hobbies.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Route>
    </Routes>
  );
}
