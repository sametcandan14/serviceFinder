import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
const UserPage = () => {
  const { theme } = useContext(ThemeContext);
  const authState = useSelector((state) => state.authState);
  return (
    <>
      <main>
        <div
          className="d-flex flex-column flex-shrink-0 p-3"
          style={{ width: 280 }}
        >
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#home" />
                </svg>
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="#"
                className={`nav-link ${theme === "light" && "link-dark"}`}
              >
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#table" />
                </svg>
                Orders
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link ${theme === "light" && "link-dark"}`}
              >
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#grid" />
                </svg>
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link ${theme === "light" && "link-dark"}`}
              >
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#people-circle" />
                </svg>
                Customers
              </a>
            </li>
          </ul>
          <hr />

          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              className="align-items-center link-dark text-decoration-none dropdown-toggle"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width={32}
                height={32}
                className="rounded-circle me-2"
              />
              <strong>
                {authState.user && <strong>{authState.user.email}</strong>}
              </strong>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">DashBoard</Dropdown.Item>
              <Dropdown.Item href="#/action-2">My Project</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </main>
    </>
  );
};

export default UserPage;
