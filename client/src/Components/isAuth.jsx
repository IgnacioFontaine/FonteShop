import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export const IsAuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const current_user = useSelector((state) => state.products.user);
  console.log(current_user);
  
  if (current_user != null) {
    return (
    <>
      {children}
    </>
  );
  } else if (current_user == null) {
    navigate("/singIn");
  }

};
