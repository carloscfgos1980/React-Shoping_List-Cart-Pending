import React from "react"

function ListItem({ item, clickItem }) {
  return (
    <ul>
      <li
        key={item.id}
        className="list-item"
        onClick={clickItem}
        value={item.title}
      >
        {item.title}
      </li>
    </ul>
  )
}
//to make available this in the index.js, we export it
export default ListItem