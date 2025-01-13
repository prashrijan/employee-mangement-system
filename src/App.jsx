import React, { useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const authData = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  console.log(user);
  console.log(loggedInUserData);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const loggedInEmployee = authData.employeesData.find(
        (employee) =>
          employee.email.toLowerCase() === email.toLowerCase() &&
          employee.password === password
      );
      setUser("employee");
      setLoggedInUserData(loggedInEmployee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: loggedInEmployee })
      );
    } else {
      setUser(null);
    }
  };

  console.log(user);
  console.log(loggedInUserData);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : user === "admin" ? (
        <AdminDashboard data={loggedInUserData} />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
