import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Logo from "./images/Deliveroo-Logo.png";
import RestaurantTittle from "./components/RestaurantTittle";
import Categories from "./components/Categories";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend-copy.herokuapp.com/"
    );
    setData(response.data);
    setisLoading(false);
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
      <Categories data={data} />
    </div>
  );
}

export default App;
