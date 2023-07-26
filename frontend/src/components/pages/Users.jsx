import React from "react";
import { useNavigate } from "react-router-dom";

import Default from "../templates/Default";
import UserListWrapper from "../molecules/UserListWrapper";
import AppLoading from "../organisms/AppLoading";
import { getToken, removeToken } from "../../helpers/Auth";

export default function Users() {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const token = getToken();

    fetch("http://localhost:4000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(() => {
        removeToken();
        navigate("/");
      });
  }, [navigate]);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="users">
        <h1>Users</h1>
        <UserListWrapper users={users} />
      </div>
    </Default>
  );
}
