import Category from "./Category";

const Categories = ({
  data,
  cartList,
  setCartList,
  sousTotal,
  setsousTotal,
  total,
  setTotal,
}) => {
  return (
    <div className="container">
      {data.categories.map((elem, index) => {
        return (
          <div key={index} className="container-categories">
            <h2>{elem.name}</h2>
            <Category
              elem={elem}
              cartList={cartList}
              setCartList={setCartList}
              sousTotal={sousTotal}
              setsousTotal={setsousTotal}
              total={total}
              setTotal={setTotal}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
