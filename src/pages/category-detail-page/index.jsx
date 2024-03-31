import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import CategorySingle from "../../components/category-single";
import ServiceSingle from "../../components/service-single";

const CategoryDetailPage = () => {
  const params = useParams();
  const api = useApi();

  const [categoryDetail, setCategoryDetail] = useState(null);

  useEffect(() => {
    if (categoryDetail !== null) {
      setCategoryDetail(null);
    }
    (async () => {
      const response = await api.get(`${params.slug}`);

      console.log(response.data);

      setCategoryDetail(response.data);

      console.warn(categoryDetail);
    })();
  }, [params.slug]);

  return !categoryDetail ? (
    <p>Loading</p>
  ) : (
    <>
      <h1>Category: {categoryDetail.category.name}</h1>
      <p>{categoryDetail.category.description} </p>

      <hr />

      {categoryDetail.category.children?.length > 0 ? (
        <>
          <h2>Sub Categories</h2>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {categoryDetail.category.children.map((category) => (
              <CategorySingle key={category.id} category={category} />
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {categoryDetail.services?.length > 0 ? (
        <>
          <h2>Services</h2>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {categoryDetail.services.map((service) => (
              <ServiceSingle key={service.id} service={service} />
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default CategoryDetailPage;
