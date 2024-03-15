import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import HomePage from "./Pages/Home/HomePage";
import { useDispatch } from "react-redux";
import { getTeachersThunk } from "./redux/thunks";
import { useEffect } from "react";
import NotFoundPage from "./Pages/HotFoundPage/NotFoundPage";
import TeachersPage from "./Pages/Teachers/TeachersPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachersThunk());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
