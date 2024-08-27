import React from "react";
import ProductTable from "../component/ProductTable";
const UserDashboard = ({ products }) => {
  return (
    <div>
      <ProductTable products={products} isAdmin={false} />
    </div>
  );
};

export default UserDashboard;
