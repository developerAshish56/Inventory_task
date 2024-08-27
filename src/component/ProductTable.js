import React from "react";
import { MdEdit } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const ProductTable = ({ products, onEdit, onDelete, onDisable, isAdmin }) => {
  return (
    <div className="customTable">
      <table>
        <thead>
          <tr>
            <th>
              <span>Name</span>
            </th>
            <th>
              <span>Category</span>
            </th>
            <th>
              <span>Price</span>
            </th>
            <th>
              <span>Quantity</span>
            </th>
            <th>
              <span>Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.length &&
            products?.map((product) => (
              <tr
                key={product.name}
                style={{ opacity: product.isDisabled ? 0.5 : 1 }}
              >
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>

                <td>
                  <button
                    className="editBtn"
                    onClick={() => onEdit(product.name)}
                    disabled={product.isDisabled || !isAdmin}
                  >
                    <MdEdit />
                  </button>
                  <button
                    className="viewBtn"
                    onClick={() => onDisable(product.name)}
                    disabled={product.isDisabled || !isAdmin}
                  >
                    <MdOutlineRemoveRedEye />
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => onDelete(product.name)}
                    disabled={product.isDisabled || !isAdmin}
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
