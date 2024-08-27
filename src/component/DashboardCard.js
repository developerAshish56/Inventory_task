import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {
  FaShoppingCart,
  FaDollarSign,
  FaCartPlus,
  FaTags,
} from "react-icons/fa";

import InfoCard from "./InfoCard";

const DashboardCard = ({ products }) => {
  const stats = products.reduce(
    (acc, product) => {
      const quantity = product.quantity;
      const price = parseFloat(product.price.replace("$", ""));

      acc.totalProducts += quantity;
      acc.totalPrice += quantity * price;
      if (quantity === 0) {
        acc.outOfStock += 1;
      }

      acc.categories.add(product.category);

      return acc;
    },
    {
      totalProducts: 0,
      totalPrice: 0,
      outOfStock: 0,
      categories: new Set(),
    }
  );

  const productsDetail = [
    {
      icon: <FaShoppingCart />,
      title: "Total product",
      value: stats?.totalProducts,
    },
    {
      icon: <FaDollarSign />,
      title: "Total store value",
      value: stats?.totalPrice,
    },
    {
      icon: <FaCartPlus />,
      title: "Out of stocks",
      value: stats?.outOfStock,
    },
    {
      icon: <FaTags />,
      title: "No of Category",
      value: stats?.categories?.size,
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="space-around">
      {productsDetail.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <InfoCard icon={item.icon} title={item.title} value={item.value} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCard;
