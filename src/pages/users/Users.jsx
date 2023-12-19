import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themecontext/ThemeContext";
const Users = () => {
  const [user, setUser] = React.useState([]);

  const {theme} = React.useContext(ThemeContext)

  React.useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      try {
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className={theme}>
      <h1>Users</h1>

    {user.length > 0 && <ul>
        {
            user.map(item => (
                <li key={item.id}>
                    <Link to={`/users/${item.id}`}>{item.name}</Link>
                </li>
            ))
        }
        </ul>}

    </div>
  );
};

export default Users;
