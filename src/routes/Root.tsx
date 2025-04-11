import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <nav>Tsotetsi Mosala</nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
