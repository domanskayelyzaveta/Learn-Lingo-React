import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import TeachersPage from "./Pages/Teachers/TeachersPage";
import { Layout } from "./Layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="tutors" element={<TeachersPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
