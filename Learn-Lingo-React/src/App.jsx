import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Teachers from "./pages/Teachers/Teachers";
import HomePage from "./Pages/Home/HomePage";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTeachersThunk());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
