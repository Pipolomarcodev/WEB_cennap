import "./submittedForm.css";

export const SubmittedForm = () => {
  return (
    <>
      <div className="submitted-container ">
        <img src="/src/assets/images/logo-form.png" alt="logo-form" />
        <img
          className="icon-svg"
          src="/src/assets/icons/Vector.svg"
          alt="accept-icon"
        />
        <strong>¡Bienvenido!</strong>
        <p>
          Te hemos enviado un correo de <br /> confirmación!
        </p>
      </div>
    </>
  );
};
