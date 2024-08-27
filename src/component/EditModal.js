import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Grid,
} from "@mui/material";

const EditModal = ({ product, open, onClose, onSave }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
  };

  return (
    <Dialog className="editModal" open={open} onClose={onClose}>
      <DialogTitle>
        Edit Product
        <span>Samsung s24 ultra</span>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={editedProduct.name}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              margin="dense"
              name="category"
              label="Category"
              type="text"
              fullWidth
              value={editedProduct.category}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              margin="dense"
              name="price"
              label="Price"
              type="number"
              fullWidth
              value={editedProduct.price}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              margin="dense"
              name="quantity"
              label="Quantity"
              type="number"
              fullWidth
              value={editedProduct.quantity}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className="cancelBtn">
          Cancel
        </Button>
        <Button onClick={handleSave} className="saveBtn">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
