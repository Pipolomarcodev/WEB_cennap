import { icons } from "../../../constants";
export const ModalCalendar = ({ restaurant }) => {
  return (
    <>
      <div className="dates">
        <h3>
          Horarios <img src={icons.time} alt="icon-time" />
        </h3>
      </div>
      <p>{`${restaurant.day_disponibility[0].day_of_week} ${
        restaurant.day_disponibility[0].open
          ? restaurant.day_disponibility[0].open_hour
          : "Cerrado"
      }${
        restaurant.day_disponibility[0].close_hour
          ? `  ${restaurant.day_disponibility[0].close_hour}`
          : ""
      }`}</p>
      <p>{`${restaurant.day_disponibility[1].day_of_week} ${
        restaurant.day_disponibility[1].open
          ? restaurant.day_disponibility[1].open_hour
          : "Cerrado"
      } ${
        restaurant.day_disponibility[1].close_hour
          ? `${restaurant.day_disponibility[1].close_hour}`
          : ""
      }`}</p>
      <p>{`${restaurant.day_disponibility[2].day_of_week} ${
        restaurant.day_disponibility[2].open
          ? restaurant.day_disponibility[2].open_hour
          : "Cerrado"
      } ${
        restaurant.day_disponibility[2].close_hour
          ? `  ${restaurant.day_disponibility[2].close_hour}`
          : ""
      }`}</p>
      <p>{`${restaurant.day_disponibility[3].day_of_week} ${
        restaurant.day_disponibility[3].open
          ? restaurant.day_disponibility[3].open_hour
          : "Cerrado"
      } ${
        restaurant.day_disponibility[3].close_hour
          ? `  ${restaurant.day_disponibility[3].close_hour}`
          : ""
      }`}</p>
      <p>{`${restaurant.day_disponibility[4].day_of_week} ${
        restaurant.day_disponibility[4].open
          ? restaurant.day_disponibility[4].open_hour
          : "Cerrado"
      }${
        restaurant.day_disponibility[4].close_hour
          ? `  ${restaurant.day_disponibility[4].close_hour}`
          : ""
      }`}</p>
      <p>{`${restaurant.day_disponibility[5].day_of_week} ${
        restaurant.day_disponibility[5].open
          ? restaurant.day_disponibility[5].open_hour
          : "Cerrado"
      } ${
        restaurant.day_disponibility[5].close_hour
          ? ` ${restaurant.day_disponibility[5].close_hour}`
          : ""
      }`}</p>
      <p>{`${restaurant.day_disponibility[6].day_of_week} ${
        restaurant.day_disponibility[6].open
          ? restaurant.day_disponibility[6].open_hour
          : "Cerrado"
      } ${
        restaurant.day_disponibility[6].close_hour
          ? `  ${restaurant.day_disponibility[6].close_hour}`
          : ""
      }`}</p>
    </>
  );
};
