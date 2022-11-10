import React from "react";
import ItemList from "./ItemList.jsx";

function ColorList(props) {
  var colors = Object.keys(props.colorCount);
  return (
    <>
      <h2>The Rainbow List</h2>
      <div className="color-list">
        {colors.map(color => {
        return (
          <div className={color}>
            <h4>{color}</h4>
            {props.allItems[color] &&
              <ItemList items={props.allItems[color]} key={color} handleClick={props.handleClick}/>
            }
          </div>
        )
      })}</div>
    </>
  )
}

export default ColorList;