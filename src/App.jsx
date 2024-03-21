import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import TeachersPage from "./Pages/Teachers/TeachersPage";
import RegisterForm from "./Compnents/RegisterForm/RegisterForm";
import LoginForm from "./Compnents/LoginForm/LoginForm";
import { Layout } from "./Layout/Layout";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="tutors" element={<TeachersPage />} />
          <Route path="signup" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
