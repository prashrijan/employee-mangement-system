import React, { useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import { data } from "autoprefixer";

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

  const handleLogin = (email, password) => {
    // if (authData) {
    //   const loggedInAdmin = authData.adminData.find((admin) => {
    //     admin.email.toLowerCase() === email.toLowerCase() &&
    //       admin.password === password;
    //   });
    //   setUser("admin");
    //   setLoggedInUserData(loggedInAdmin);
    //   localStorage.setItem(
    //     "loggedInUser",
    //     JSON.stringify({ role: "admin", data: loggedInAdmin })
    //   );
    // } else if (authData) {
    //   const loggedInEmployee = authData.employeesData.find(
    //     (employee) =>
    //       employee.email.toLowerCase() === email.toLowerCase() &&
    //       employee.password === password
    //   );
    //   setUser("employee");
    //   setLoggedInUserData(loggedInEmployee);
    //   localStorage.setItem(
    //     "loggedInUser",
    //     JSON.stringify({ role: "employee", data: loggedInEmployee })
    //   );
    // } else {
    //   setUser(null);
    // }

    if (!authData) {
      setUser(null);
      return;
    }

    const loggedInAdmin = authData.adminData.find(
      (admin) =>
        admin.email.toLowerCase() === email.toLowerCase() &&
        password === admin.password
    );

    if (loggedInAdmin) {
      setUser("admin");
      setLoggedInUserData(loggedInAdmin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: loggedInAdmin })
      );
      return;
    }

    const loggedInEmployee = authData.employeesData.find(
      (employee) =>
        employee.email.toLowerCase() === email.toLowerCase() &&
        employee.password === password
    );

    if (loggedInEmployee) {
      setUser("employee");
      setLoggedInUserData(loggedInEmployee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: loggedInEmployee })
      );
      return;
    }
    setUser(null);
  };

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
