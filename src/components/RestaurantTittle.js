const RestaurantTittle = ({ data }) => {
  return (
    <div className="title">
      <div className="text-tittle">
        <h1>{data.restaurant.name}</h1>
        <h2>{data.restaurant.description}</h2>
      </div>
      <div>
        <img src={data.restaurant.picture} alt="" />
      </div>
    </div>
  );
};

export default RestaurantTittle;
