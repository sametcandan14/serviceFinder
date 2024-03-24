import React from "react";
import { Link } from "react-router-dom";

const LinksContainer = (props) => {
  return (
    <>
      <div className="col-6 col-md">
        <h5>{props.title}</h5>
        <ul className="list-unstyled text-small">
          {props.links.map((link, i) => (
            <li className="mb-1" key={i}>
              <Link
                className="link-secondary text-decoration-none"
                to={link.url}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LinksContainer;
