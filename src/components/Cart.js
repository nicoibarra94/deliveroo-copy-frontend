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
    <div className={cartList.length === 0 ? "cart" : "cart-green"}>
      <button
        className={cartList.length === 0 ? "cart-title" : "cart-green-title"}
      >
        Valider mon panier
      </button>
      {cartList.length > 0 ? (
        <div>
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
        <p>Votre panier est vide</p>
      )}
    </div>
  );
};

export default Cart;
