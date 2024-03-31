import { Link } from "react-router-dom";
import ImgFallback from "../img-fallback";

const ServiceSingle = ({ service }) => {
  return (
    <>
      <div className="col-md-3">
        <div className="card mb-4 rounded-3 shadow-sm border-success ">
          <div
            className="card-header py-3 text-bg-success border-success"
            style={{ height: "100px" }}
          >
            <h4 className="my-0 fw-normal">{service.name}</h4>
          </div>
          <div className="card-body d-flex flex-column">
            <ImgFallback
              src={service.image}
              style={{
                width: "100%",
                margin: "10px",
                aspectRatio: 1,
                alignSelf: "center",
              }}
            />

            <Link
              to={`/services/${service.slug}`}
              type="button"
              className="w-100 btn btn-lg btn-success"
            >
              <i className="fa-solid fa-circle-arrow-right" /> &nbsp; Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSingle;
