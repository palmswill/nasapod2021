import React, { forwardRef } from "react";
import { Button, Menu } from "semantic-ui-react";
import "./navBar.css";
import DatePicker from "react-datepicker";
import { useParams } from "react-router";

import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";

const NavBar = () => {
  const history = useHistory();
  const { date } = useParams();
  if (date) {
    var slashDate = date.replace("-", "/");
  }

  const DatePickerInput=forwardRef(({ value, onClick }, ref) => (
    <Button inverted className="date-picker-box" onClick={onClick} ref={ref}>
      {value?value:"Enter Date"}
    </Button>
  ));



  return (
    <Menu className="navbar" borderless size={"tiny"}>
      <Menu.Item className="title">Spacestagram</Menu.Item>
      <Menu.Item className="date-picker" position="right">
        {
          <DatePicker
          customInput={<DatePickerInput/>}
            placeholderText=" Enter Date"
            className="date-picker-box"
            dateFormat="yyyy/MM/dd"
            maxDate={new Date()}
            selected={date ? new Date(slashDate) : ""}
            onSelect={(calenderDate) => {
              history.push(
                `./${calenderDate.getFullYear()}-${
                  calenderDate.getMonth() + 1
                }-${calenderDate.getDate()}`
              );
            }}
          />
        }

        {/* <DatePicker dateFormat="yyyy/MM/DD" selected={date ? date : ""} onSelect={(date) => history.push(`${process.env.PUBLIC_URL}/${date}`)} /> */}
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
