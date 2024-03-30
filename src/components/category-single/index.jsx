import { Link } from "react-router-dom";

const CategorySingle = ({ category }) => {
  return (
    <>
      <div className="col-md-3">
        <div className="card mb-4 rounded-3 shadow-sm border-primary ">
          <div
            className="card-header py-3 text-bg-primary border-primary"
            style={{ height: "100px" }}
          >
            <h4 className="my-0 fw-normal">{category.name}</h4>
          </div>
          <div className="card-body d-flex flex-column">
            <img
              src={category.image}
              style={{
                width: "100%",
                margin: "10px",
                aspectRatio: 1,
                alignSelf: "center",
              }}
            />
            <Link
              to={`/category/${category.slug}`}
              type="button"
              className="w-100 btn btn-lg btn-primary"
            >
              <i className="fa-solid fa-circle-arrow-right" /> &nbsp; Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySingle;
