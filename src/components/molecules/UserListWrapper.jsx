import React from "react";

import UserListItem from "./UserListItem";

export default function UserListWrapper(props) {
  return (
    <div className="users__list">
      {props.users
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((user) => (
          <UserListItem key={user.id} name={user.name} email={user.email} />
        ))}
    </div>
  );
}
