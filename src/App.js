import "./App.css";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import Logo from "./images/Deliveroo-Logo.png";
import RestaurantTittle from "./components/RestaurantTittle";
import Categories from "./components/Categories";
import Cart from "./components/Cart";

library.add(faStar);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [cartList, setCartList] = useState([]);
  const [sousTotal, setsousTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-backend-copy.herokuapp.com/"
      );
      setData(response.data);
      setisLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span> Loading...</span>
  ) : (
    <div>
      <div className="header container">
        <img src={Logo} alt="" />
      </div>
      <RestaurantTittle data={data} />
      <Categories
        data={data}
        cartList={cartList}
        setCartList={setCartList}
        sousTotal={sousTotal}
        setsousTotal={setsousTotal}
        total={total}
        setTotal={setTotal}
      />
      <Cart cartList={cartList} sousTotal={sousTotal} total={total} />
    </div>
  );
}

export default App;
