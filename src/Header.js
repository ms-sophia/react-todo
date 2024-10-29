import React from "react";

const Header = ({ title }) => {
  const dateToday = () => {
    let month;
    const date = new Date();
    let day = date.getDate();
    let year = date.getFullYear();
    switch (date.getMonth()) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        console.log("may error");
        break;
    }
    return `${month} ${day}, ${year}`;
  };
  return (
    <header>
      <h1>{title}</h1>
      <h3>{dateToday()}</h3>
    </header>
  );
};

export default Header;
