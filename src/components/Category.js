import Meals from "./Meals";

const Category = ({
  elem,
  cartList,
  setCartList,
  sousTotal,
  setsousTotal,
  total,
  setTotal,
}) => {
  return (
    <div className="container-meals">
      {elem.meals.map((meal, index) => {
        return (
          <Meals
            elemmeals={elem.meals}
            key={meal.id}
            meal={meal}
            cartList={cartList}
            setCartList={setCartList}
            sousTotal={sousTotal}
            setsousTotal={setsousTotal}
            total={total}
            setTotal={setTotal}
          />
        );
      })}
    </div>
  );
};

export default Category;
