import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import TeachersPage from "./Pages/Teachers/TeachersPage";
import { Layout } from "./Layout/Layout";
import Modal from "./Compnents/Modals/Modal";
import { setModalContent, setModalStatus } from "./redux/slice";
import ModalContent from "./Compnents/ModalContent/ModalContent";
import { useDispatch, useSelector } from "react-redux";

import NotFoundPage from "./Pages/HotFoundPage/NotFoundPage";
import { ToastContainer } from "react-toastify";
import Favorites from "./Pages/Favorites/Favorites";
import { selectIsSignedIn, selectOpenModal } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();

  const modalStatus = useSelector(selectOpenModal);
  const isSignedIn = useSelector(selectIsSignedIn);

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="tutors" element={<TeachersPage />} />
          {/* <Route path="favorites" element={<Favorites />} /> */}
          <Route
            path="favorites"
            element={isSignedIn ? <Favorites /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Modal open={modalStatus} onClose={handleCloseModal}>
        {<ModalContent />}
      </Modal>

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;
