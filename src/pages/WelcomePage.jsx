import { Routes, Route, Link, Outlet } from "react-router-dom";

const WelcomePage = () => {
  return (
    <section>
      <h1>Welcome!!!</h1>
      <Link to="new-user"> New User </Link>
      {/* we can define the nested routes in only one file approach */}
      <Routes>
        <Route
          path="new-user"
          element={<p> Welcome, new user from the outlet! 🛍️</p>}
        />
      </Routes>
      <Outlet />
    </section>
  );
};

export default WelcomePage;
