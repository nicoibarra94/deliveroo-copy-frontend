const CarItems = ({ cartList, sousTotal, total }) => {
  return (
    <div>
      {cartList.map((obj, index) => {
        return (
          <div>
            {obj.item.map((elem, index) => {
              return (
                <div key={index}>
                  <button> + </button>
                  <span> 0 </span>
                  <button> - </button>
                  <span>{elem.title}</span>
                  <span>{elem.price} €</span>
                </div>
              );
            })}
          </div>
        );
      })}
      <p>Sous Total</p>
      <span>{sousTotal} €</span>

      <p>Frais de Livrason</p>
      <span>2.50 €</span>

      <p>Total</p>
      <span>{total}</span>
    </div>
  );
};

export default CarItems;
