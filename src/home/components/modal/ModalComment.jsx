import React from "react";

const ModalComment = () => {
  return (
    <div className="comment-content">
      <div className="comment-avatar">
        <h2>
          Opiniones <span>4,5</span>
        </h2>
        <img src="/src/components/modal/img/Avatar.svg" alt="" />
      </div>

      <p>
        "Una sorpresa inesperada. Un sugerencia acertada de cenapp. La comida es
        una auténtica delicia, especialmente la entraña fina con cilantro,
        berenjenas asadas y puré. Además, el espectáculo fue un añadido
        maravilloso, volveremos!"
      </p>
    </div>
  );
};

export default ModalComment;
