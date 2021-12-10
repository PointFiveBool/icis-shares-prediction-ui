import React from "react";
import './app.css';
import { useQuery } from "react-query";
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
const App = () => {
  const { data, status, error } = useQuery("users", fetchUsers);
  return (
    <div className="App">
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div>
          {data.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
          {data.map((admin) => (
            <p key={admin.id}>{admin.name}</p>
          ))}
        
        </div>
      )}
    </div>
  );
};
export default App;