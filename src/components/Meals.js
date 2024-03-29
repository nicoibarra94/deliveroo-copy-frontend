import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Meal = ({
  elemmeals,
  meal,
  cartList,
  setCartList,
  sousTotal,
  setsousTotal,
  total,
  setTotal,
}) => {
  const handleAddtoCart = (elemmeals, meal) => {
    const updateList = [...cartList];

    // for (let i = 0; i < updateList.length; i++) {
    //   if (updateList[i].id === meal) {
    // console.log(updateList[i]);
    // console.log(meal);
    //     updateList[i].quantity = updateList[i].quantity + 1;
    // console.log(updateList[i].quantity);
    //     setCartList(updateList);
    //   }
    // }

    for (let i = 0; i < elemmeals.length; i++) {
      if (elemmeals[i].id === meal) {
        elemmeals[i].quantity = 1;
        updateList.push(elemmeals[i]);
        setCartList(updateList);
        break;
      }
    }
    let newSousTotal = 0;
    for (let i = 0; i < updateList.length; i++) {
      newSousTotal = newSousTotal + Number(updateList[i].price);
    }
    setsousTotal(newSousTotal.toFixed(2));
    setTotal((newSousTotal + 2.5).toFixed(2));
  };
  return (
    <div
      onClick={() => handleAddtoCart(elemmeals, meal.id)}
      className="container-meal"
    >
      <div className="container-meal-text">
        <h3>{meal.title}</h3>
        <p>{meal.description}</p>
        <div className="price-popular">
          <p id="price">{meal.price} €</p>
          {meal.popular === true && (
            <div className="star">
              <FontAwesomeIcon icon="star" />
              <p>Populaire</p>
            </div>
          )}
        </div>
      </div>

      {meal.picture && <img className="image-meal" src={meal.picture} alt="" />}
    </div>
  );
};

export default Meal;
