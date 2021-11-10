import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarItems = ({
  cartList,
  sousTotal,
  total,
  setTotal,
  setCartList,
  setsousTotal,
}) => {
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
        if (newList[i].quantity === 0) {
          newList.splice(i, 1);
          setCartList(newList);
        }
        setCartList(newList);
        break;
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

  return (
    <div>
      {cartList.map((elem, index) => {
        return (
          <div key={index}>
            <div className="item-in-cart">
              <div className="plus-quantity-minus">
                <FontAwesomeIcon
                  className="icon"
                  onClick={() => handlePlusButton(elem.id)}
                  icon="plus"
                />
                <span> {elem.quantity}</span>

                <FontAwesomeIcon
                  className="icon"
                  onClick={() => handleMinusButton(elem.id)}
                  icon="minus"
                />

                <span id="box-title">{elem.title}</span>
              </div>
              <div className=".price">
                <span>{(elem.quantity * elem.price).toFixed(2)} €</span>
              </div>
            </div>
          </div>
        );
      })}
      <hr className="hr" />
      <div className="sous-total">
        <p>Sous Total</p>
        <span>{sousTotal} €</span>
      </div>
      <div className="sous-total">
        <p>Frais de Livrason</p>
        <span>2.50 €</span>
      </div>
      <hr className="hr" />
      <div className="total">
        <p>Total</p>
        <span>{total}</span>
      </div>
    </div>
  );
};

export default CarItems;
