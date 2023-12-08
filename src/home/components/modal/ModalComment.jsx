import { icons } from "../../../constants";

const ModalComment = () => {
  return (
    <>
      <div className="comment-title">
        <h3>
          Valoraciones <img className="title-img" src={icons.Square} alt="" />
        </h3>
        <img src={icons.Avatar} alt="" />
      </div>
      <div className="comment-data">
        <p>
          "Otra sugerencia acertada de cenapp. La comida es una auténtica
          delicia, además, el espectáculo fue maravilloso, volveremos!"
        </p>
      </div>
    </>
  );
};

export default ModalComment;
