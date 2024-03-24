import BootstrapLogo from "../../assets/svg/bootstrap.svg";
import LinksContainer from "./components/footer-links-container";

const Footer = () => {
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
            title="Örnek Link Grubu"
            links={[
              { title: "Örnek link 1", url: "test" },
              { title: "Örnek link 1", url: "test" },
              { title: "Örnek link 1", url: "test" },
              { title: "Örnek link 1", url: "test" },
              { title: "Örnek link 1", url: "test" },
              { title: "Örnek link 1", url: "test" },
            ]}
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
        </div>
      </footer>
    </>
  );
};

export default Footer;