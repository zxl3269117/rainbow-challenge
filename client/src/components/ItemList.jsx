import React from "react";

function ItemList(props) {
  var list = props.items.map(item => {
    if (item.count) {
      return <button key={item._id} onClick={() => { props.handleClick(item)}}>{item.name}: {item.count}</button>
    } else {
      return <button key={item._id} onClick={() => { props.handleClick(item)}}>{item.name}</button>
    }
  })

  return (
    <div>{list}</div>
  )
}

export default ItemList;