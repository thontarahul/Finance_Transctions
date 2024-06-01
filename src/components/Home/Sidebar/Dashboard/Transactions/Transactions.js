import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography, Select, MenuItem, TextField, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddNew from './AddNew';

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
    { field: 'id', headerName: 'ID', width: 100 }, // Add ID column
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
          onEdit={() => handleEdit(params.row.ids)}
          onDelete={() => handleDelete(params.row.ids)}
        />
      )
    },
  ];

  // const handleEdit = (editId) => {
  //   navigate(`/home/add-new/${editId}`);
  // }
  

  const handleEdit = (editId) => {
    if (window.confirm("Are you sure you want to edit?")) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios.put(`http://192.168.0.127:8082/api/transactions/${editId}`, config)
      .then(response => {
        console.log("Edit response:", response);
        // Handle success
        alert("Edited successful");
        window.location.reload();
      })
      .catch(error => {
        console.error("Error in Editing:", error);
      });
      // Assuming you want to navigate to the edit page with the ID
      navigate(`/home/add-new/${editId}`);
    }
  }
  

  const handleDelete = (deleteId) => {
    console.log("Deleting transaction with ID:", deleteId);
    if (window.confirm("Are you sure you want to delete?")) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios.delete(`http://192.168.0.127:8082/api/transactions/${deleteId}`, config)
        .then(response => {
          console.log("Delete response:", response);
          // Handle success
          alert("Delete successful");
          window.location.reload();
        })
        .catch(error => {
          console.error("Error deleting:", error);
        });
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        };
        const response = await axios.get('http://192.168.0.127:8082/api/transactions', config);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transaction data:', error);
      }
    };
    fetchData();
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
    <Box sx={{ height: 600, width: '100%' }}>
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
      <DataGrid rows={filteredTransactions.map((transaction, index) => ({ ...transaction, ids: transaction.id , id: index + 1}))} columns={columns} pageSize={5} />
    </Box>
  );
}

export default Transactions;

// Outside of the Transactions component
<Route path="/home/add-new" element={<AddNew/>} />
