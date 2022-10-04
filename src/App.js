import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState(null);
  const getUsers = (e) => {
    e.preventDefault();

    fetch("users.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setUserList(data);
      });
  };
  return (
    <div className="App">
      <div className="container">
        <button
          className="button"
          onClick={(e) => {
            getUsers(e);
          }}
        >
          Get Users
        </button>
        {userList && (
          <div className="allUsers">
            {userList.map((user, index) => {
              return (
                <div className="singleUser" key={index}>
                  <ul>
                    <li>ID: {user.id}</li>
                    <li>Name: {user.name}</li>
                    <li>Age: {user.age}</li>
                    <li>Email: {user.email}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
