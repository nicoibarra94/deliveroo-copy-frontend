import CarItems from "./CarItems";

const Cart = ({ cartList, sousTotal, total }) => {
  return (
    <div className="cart">
      <h1>Valider mon panier</h1>
      {cartList.length > 0 ? (
        <div>
          <button>Validate</button>
          <CarItems cartList={cartList} sousTotal={sousTotal} total={total} />
        </div>
      ) : (
        <p>The cart list is empty</p>
      )}
    </div>
  );
};

export default Cart;
