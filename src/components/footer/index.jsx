import { useSelector } from "react-redux";
import BootstrapLogo from "../../assets/svg/bootstrap.svg";
import LinksContainer from "./components/footer-links-container";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

const Footer = () => {
  const categoryState = useSelector((state) => state.categoryState);
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src={BootstrapLogo}
              alt=""
              width={24}
              height={19}
            />
            <small className="d-block mb-3 text-body-secondary">
              © 2017–2024
            </small>
          </div>
          <LinksContainer
            title="Categories"
            links={categoryState.categories.map((category) => ({
              url: `/category/${category.slug}`,
              title: category.name,
            }))}
          />
          <LinksContainer
            title="About Us"
            links={[
              { title: "About Us", url: "about-us" },
              { title: "Vision&Mission", url: "about-us/vision-mission" },
              { title: "Contact Us", url: "about-us/contact-us" },
              { title: "Privacy Policy", url: "about-us/privacy-policy" },
            ]}
          />

          <div className="col-6 col-md">
            Theme Color:
            <br />
            <Button
              variant="light"
              onClick={() => {
                setTheme("light");
              }}
            >
              {theme === "light" ? (
                <i className="fa-regular fa-square-check"></i>
              ) : (
                <i className="fa-regular fa-moon"></i>
              )}
              &nbsp; Light
            </Button>
            &nbsp;
            <Button
              variant="dark"
              onClick={() => {
                setTheme("dark");
              }}
            >
              {theme === "dark" ? (
                <i className="fa-regular fa-square-check"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
              &nbsp; Dark
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
