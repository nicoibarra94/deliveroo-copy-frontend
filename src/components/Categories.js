const Categories = ({ data }) => {
  return (
    <div className="container">
      {data.categories.map((elem, index) => {
        return (
          <div className="container-categories">
            <h2>{elem.name}</h2>
            <div className="container-meals">
              {elem.meals.map((meal, index) => {
                return (
                  <div className="container-meal">
                    <div className="container-meal-text">
                      <h3>{meal.title}</h3>
                      <p>{meal.description}</p>
                      <p id="price">{meal.price}</p>
                    </div>
                    {meal.picture && (
                      <img className="image-meal" src={meal.picture} alt="" />
                    )}
                    {meal.popular && <p>*</p>}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
