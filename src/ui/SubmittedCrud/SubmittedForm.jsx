import "./submittedForm.css";

export const SubmittedForm = ({ titulo, crud, word }) => {
  return (
    <>
      <div className="submitted-container ">
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
      </div>
    </>
  );
};
