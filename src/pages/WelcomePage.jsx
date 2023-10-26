import { Routes, Route, Link, Outlet } from "react-router-dom";

const WelcomePage = () => {
  return (
    <section>
      <h1>Welcome!!!</h1>
      <Link to="new-user"> New User </Link>
      {/* we can define the nestes routes in only one file approach */}
      {/* <Routes>
            <Route path="new-user" element={<p> Welcome, new user! </p>}/>
        </Routes> */}
      <Outlet />
    </section>
  );
};

export default WelcomePage;
