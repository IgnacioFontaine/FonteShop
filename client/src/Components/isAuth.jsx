import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import SignIn from "./singIn";
import CheckOutPage from "../assets/Views/checkOutPage";

export const IsAuthGuard = ( {component} ) => {
  const navigate = useNavigate();
  const current_user = useSelector((state) => state.products.user);
  console.log(current_user);
  
  if (current_user != null) {
    return (
    <>
      <CheckOutPage />
    </>
  );
  } else if (current_user == null) {
    return (
    <SignIn />
    )
  }
};
