import React, { useState } from "react";

import ProductTable from "../component/ProductTable";
import EditModal from "../component/EditModal";

const AdminDashboard = ({ products, setProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (name) => {
    const product = products?.find((product) => product.name === name);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (name) => {
    setProducts(products?.filter((product) => product?.name !== name));
  };

  const handleDisable = (name) => {
    setProducts(
      products?.map((product) =>
        product?.name === name
          ? { ...product, isDisabled: !product.isDisabled }
          : product
      )
    );
  };

  const handleSave = (editedProduct) => {
    let data = products?.map((product) =>
      product.name === selectedProduct.name ? editedProduct : product
    );

    setProducts(data);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <ProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDisable={handleDisable}
        isAdmin={true}
      />
      {selectedProduct && (
        <EditModal
          product={selectedProduct}
          open={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
