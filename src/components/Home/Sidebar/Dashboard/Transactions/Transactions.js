
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography, Select, MenuItem, TextField, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const ActionsCell = ({ onEdit, onDelete, id }) => (
  <>
    <IconButton key={`edit_${id}`} onClick={onEdit}>
      <EditIcon />
    </IconButton>
    <IconButton key={`delete_${id}`} onClick={onDelete}>
      <DeleteIcon />
    </IconButton>
  </>
);

const Transactions = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [transactions, setTransactions] = useState([]);
  const token = localStorage.getItem('token');

  const columns = [
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'amount', headerName: 'Amount', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <ActionsCell
          id={params.row.id}
          onEdit={() => handleEdit(params.row.id)}
          onDelete={() => handleDelete(params.row.id)}
        />
      )
    },
  ];

  const handleEdit = (editId) => {
    navigate(`/home/add-new/${editId}`);
  }

  const handleDelete = (deleteId) => {
    console.log("Deleting transaction with ID:", deleteId);
    if (window.confirm("Are you sure you want to delete?")) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios.delete(`http://192.168.0.113:8082/api/transactions/${deleteId}`, config)
        .then(response => {
          console.log("Delete response:", response);
          alert("Delete successful");
          setTransactions(transactions.filter(transaction => transaction.id !== deleteId));
        })
        .catch(error => {
          console.error("Error deleting:", error);
        });
    }
  }

  const fetchTransactions = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await axios.get('http://192.168.0.113:8082/api/transactions', config);
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transaction data:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTransactions = transactions.filter(transaction =>
    (transaction.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (transaction.date || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (transaction.amount !== undefined ? transaction.amount.toString().toLowerCase() : '').includes(searchQuery.toLowerCase()) ||
    (transaction.type || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (transaction.status || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <Box sx={{ height: 400, width: '100%' }}>
        <Typography variant="h4" gutterBottom>Transactions</Typography>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField label="Search" variant="outlined" value={searchQuery} onChange={handleSearchChange} />
          <Select defaultValue="" displayEmpty>
            <MenuItem value="">Transaction Type</MenuItem>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
          <Select defaultValue="" displayEmpty>
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="Accepted">Accepted</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
          <Button variant="contained" onClick={() => navigate('/home/add-new')}>Add New</Button>
        </Box>
        <DataGrid rows={filteredTransactions} columns={columns} pageSize={5} />
      </Box>
    </div>
  );
}

export default Transactions;



