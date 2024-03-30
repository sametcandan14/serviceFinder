import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategorySingle from "../../components/category-single";

const MainPage = () => {
  const categoryState = useSelector((state) => state.categoryState);
  return (
    <>
      <main>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal text-body-emphasis">
            Welcome to Service Finder Project
          </h1>
          <p className="fs-5 text-body-secondary">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <h1 className="mb-5 display-4 fw-normal text-body-emphasis text-center ">
          Category List
        </h1>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {categoryState.categories.map((category) => (
            <CategorySingle key={category.id} category={category} />
          ))}
        </div>
      </main>
    </>
  );
};

export default MainPage;
