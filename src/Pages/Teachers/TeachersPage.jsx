import { useDispatch } from "react-redux";
import Filter from "../../Compnents/Filter/Filter";
import TeacherCard from "../../Compnents/TeacherCard/TeacherCard";
import { Container, TeacherPageWrapper } from "./Teachers.styled";
import { useEffect } from "react";
import { getTeachersThunk } from "../../redux/thunks";

const TeachersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachersThunk());
  }, [dispatch]);

  return (
    <TeacherPageWrapper>
      <Container>
        <Filter />
        <TeacherCard />
      </Container>
    </TeacherPageWrapper>
  );
};

export default TeachersPage;
