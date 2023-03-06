import React from "react";

export default function UserListItem(props) {
  return (
    <div className="users__list-item">
      <div className="users__list-item-name">{props.name}</div>
      <div className="users__list-item-email">{props.email}</div>
    </div>
  );
}
