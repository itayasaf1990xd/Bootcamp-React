import React, { useState } from "react";
import Button from "../Components/Button/Button.component";
import "./MainPage.css";

function MainPage() {
  const itemList = ["one", "two", "three", "four", "five"];
  const generateList = () =>
    itemList.map((item) => {
      return { name: item, checked: false };
    });
  let [checkboxes, setCheckboxes] = useState(generateList());

  const toggleCheckbox = (event) => {
    setCheckboxes(
      checkboxes.map((item) => {
        if (item.name === event.target.name) {
          return { name: item.name, checked: !item.checked };
        }
        return item;
      })
    );
  };

  const resetList = () => {
    setCheckboxes(generateList());
  };

  const deleteItemFromList = () => {
    setCheckboxes(checkboxes.filter((item) => !item.checked));
  };

  const renderList = () => {
    return (
      <ul className="list-items">
        {checkboxes.map((item) => {
          return (
            <li className="item-wrapper" key={item.name}>
              <label className="item-label" htmlFor={item.name}>{item.name}</label>
              <input
                id={item.name}
                type="checkbox"
                name={item.name}
                checked={item.checked}
                className="item-input"
                onChange={(event) => toggleCheckbox(event)}
              />
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <>
      <div className="container">
        <div className="buttons-container">
          <Button value="reset" onClick={resetList} />
          <Button value="delete" onClick={deleteItemFromList} />
        </div>
        <div className="list-container">{renderList()}</div>
      </div>
    </>
  );
}

export default MainPage;
