import React, { useState } from "react";
import Input from "../Components/Input/Input.component";
import "./MainPage.css";

function MainPage() {
  const [time, setTime] = useState({
    second: 0,
    minute: 0,
    hour: 0,
  });
  const handleTime = (event) => {
    const { name, value } = event.target;
    console.log(event.target.validity.valid);

    if (event.target.validity.valid) {
      switch (name) {
        case "second":
          setTime({
            second: value,
            minute: value / 60,
            hour: value / 3600,
          });
          break;
        case "minute":
          setTime({
            second: value * 60,
            minute: value,
            hour: value / 60,
          });
          break;
        case "hour":
          setTime({
            second: value * 3600,
            minute: value * 60,
            hour: value,
          });
          break;
        default:
          console.log("Error: invalid input");
          break;
      }
    }
  };

  return (
    <form className="container">
      <Input value={time.second} name="second" onChange={handleTime} />
      <Input value={time.minute} name="minute" onChange={handleTime} />
      <Input value={time.hour} name="hour" onChange={handleTime} />
    </form>
  );
}

export default MainPage;
