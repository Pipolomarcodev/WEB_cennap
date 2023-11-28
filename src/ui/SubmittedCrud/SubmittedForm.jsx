import "./submittedForm.css";
import { useNavigate } from "react-router-dom";
export const SubmittedForm = ({ titulo, crud, word }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-submited">
        <div className="submitted-container">
          <img src="/src/assets/images/logo-form.png" alt="logo-form" />
          <img
            className="icon-svg"
            src="/src/assets/icons/Vector.svg"
            alt="accept-icon"
          />
          <strong>{titulo}</strong>
          <p>
            Se ha {crud} el {word} <br /> Corretamente!
          </p>
          <button onClick={() => navigate("/auth/login")} className="login">
            Ir al Login
          </button>
        </div>
      </div>
    </>
  );
};
