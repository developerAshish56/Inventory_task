import React, { useEffect, useState } from "react";
import axios from "axios";
import Switch from "@mui/material/Switch";

import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import DashboardCard from "./component/DashboardCard";
import "./App.css";
import { Container } from "@mui/material";
import { GrLogout } from "react-icons/gr";

function App() {
  const API_URL = "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory";

  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      return null;
    }
  };

  const handleToggle = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="header">
        <Container maxWidth="xl">
          <div className="toggleButton">
            <p>admin</p>
            <Switch defaultChecked onChange={handleToggle} />
            <p>user</p>
            <span className="logout">
              <GrLogout />
            </span>
          </div>
        </Container>
      </div>
      <div className="mainContent">
        <Container maxWidth="xl">
          <h1>Inventory stats</h1>
          <DashboardCard products={products} />

          <div className="subContent">
            {selected ? (
              <AdminDashboard products={products} setProducts={setProducts} />
            ) : (
              <UserDashboard products={products} />
            )}
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
