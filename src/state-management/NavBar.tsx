import LoginStatus from "./LoginStatus";

const NavBar = () => {
  // const { tasks } = useTasks();
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">4</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
