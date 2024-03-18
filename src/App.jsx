// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./Pages/Home/HomePage";
// import { useDispatch } from "react-redux";
// import { getTeachersThunk } from "./redux/thunks";
// import { useEffect } from "react";
// import TeachersPage from "./Pages/Teachers/TeachersPage";

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getTeachersThunk());
//   }, [dispatch]);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/teachers" element={<TeachersPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import { useDispatch } from "react-redux";
import { getTeachersThunk } from "./redux/thunks";
import { useEffect } from "react";
import TeachersPage from "./Pages/Teachers/TeachersPage";
import NotFoundPage from "./Pages/HotFoundPage/NotFoundPage";
import RegisterForm from "./Compnents/RegisterForm/RegisterForm";
import LoginForm from "./Compnents/LoginForm/LoginForm";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachersThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
