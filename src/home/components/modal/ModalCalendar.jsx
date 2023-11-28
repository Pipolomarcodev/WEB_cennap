import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const ModalCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="calendar-border">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
        />
      </div>
      <button className="btn-calendar">
        <img src="/src/components/modal/img/Calendar.svg" alt="" />
        Iniciar Reserva
      </button>
    </>
  );
};
