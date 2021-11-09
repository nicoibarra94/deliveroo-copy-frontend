import CarItems from "./CarItems";

const Cart = ({
  cartList,
  sousTotal,
  total,
  setCartList,
  setTotal,
  setsousTotal,
}) => {
  return (
    <div className="cart">
      <h1>Valider mon panier</h1>
      {cartList.length > 0 ? (
        <div>
          <button>Validate</button>
          <CarItems
            cartList={cartList}
            sousTotal={sousTotal}
            total={total}
            setTotal={setTotal}
            setCartList={setCartList}
            setsousTotal={setsousTotal}
          />
        </div>
      ) : (
        <p>The cart list is empty</p>
      )}
    </div>
  );
};

export default Cart;
