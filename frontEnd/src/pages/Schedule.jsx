import { render } from "@testing-library/react";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Member_nav from "./member/Member_nav";

function Schedule(params) {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <div className="head_nav" style={{ display: "flex" }}>
        <div className="left_side">
          <Member_nav />
        </div>
        <div
          className="title"
          style={{
            color: "#3C8350",
            width: "100vw",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          <h1>SCHEDULE</h1>
        </div>
      </div>
      <div className="calender">
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
