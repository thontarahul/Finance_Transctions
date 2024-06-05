
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import {finappaxios} from "../../../../../axios"

const AddNew = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userID = localStorage.getItem('userID');
  const [formData, setFormData] = useState({
    description: '',
    date: '',
    amount: '',
    type: '',
    userId: userID
  });
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (id) {
      const fetchTransaction = async () => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
          const response = await finappaxios.get(`/api/transactions/${id}`, config);
          setFormData(response.data);
        } catch (error) {
          console.error('Error fetching transaction:', error);
        }
      };
      fetchTransaction();
    }
  }, [id, token]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    try {
      if (id) {
        await finappaxios.put(`/api/transactions/${id}`, formData, config);
        alert('Transaction updated successfully');
      } else {
        await finappaxios.post('/api/transactions', formData, config);
        alert('Transaction added successfully');
      }
      navigate('/home/transactions'); // Navigate to transactions page after successful submission
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  };
 

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>{id ? 'Edit Transaction' : 'Add Transaction'}</Typography>
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Amount"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Type"
        name="type"
        value={formData.type}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">{id ? 'Update' : 'Add'}</Button>
    </Box>
  );
};

export default AddNew;



