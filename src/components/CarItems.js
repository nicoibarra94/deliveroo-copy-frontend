const CarItems = ({
  cartList,
  sousTotal,
  total,
  setTotal,
  setCartList,
  setsousTotal,
}) => {
  console.log(cartList);

  const handlePlusButton = (id) => {
    const newList = [...cartList];
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === id) {
        newList[i].quantity = newList[i].quantity + 1;
        setCartList(newList);
      }
    }
    let newSousTotal = 0;
    for (let i = 0; i < newList.length; i++) {
      newSousTotal =
        newSousTotal + Number(newList[i].quantity) * Number(newList[i].price);
    }
    setsousTotal(newSousTotal.toFixed(2));
    setTotal((newSousTotal + 2.5).toFixed(2));
  };

  const handleMinusButton = (id) => {
    const newList = [...cartList];
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === id) {
        newList[i].quantity = newList[i].quantity - 1;
        setCartList(newList);
        break;
      }
    }
    let newSousTotal = 0;
    for (let i = 0; i < newList.length; i++) {
      newSousTotal =
        newSousTotal + Number(newList[i].quantity) * Number(newList[i].price);
    }
    setsousTotal(newSousTotal);
    setTotal((newSousTotal + 2.5).toFixed(2));
  };

  return (
    <div>
      {cartList.map((elem, index) => {
        return (
          <div key={index}>
            <button onClick={() => handlePlusButton(elem.id)}> + </button>
            <span> {elem.quantity}</span>
            <button onClick={() => handleMinusButton(elem.id)}> - </button>
            <span>{elem.title}</span>
            <span>{elem.price} €</span>
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
