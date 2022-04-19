import React from "react";

const List = ({ items }) => (
  <div className="listWrapper">
    {items.length > 0 ? (
      <>
        <ul className="list">
          {items.map(({ value, id }) => (
            <li key={id} className="listItem">
              {value}
            </li>
          ))}
        </ul>
      </>
    ) : (
      <div className="listPlaceholder">"No items"</div>
    )}
  </div>
);

List.defaultProps = {
  items: [],
};

export default List;
