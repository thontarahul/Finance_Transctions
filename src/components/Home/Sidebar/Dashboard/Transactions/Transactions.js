// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Box, Button, Typography, Select, MenuItem, TextField } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const transactions = [
//   { id: 1, name: 'John Doe', date: 'May 25 2023', amount: 758000, type: 'Income', status: 'Accepted' },
//   { id: 2, name: 'Jane Smith', date: 'May 25 2023', amount: 758000, type: 'Expense', status: 'Pending' },
//   // Add more transactions here
// ];

// const columns = [
//   { field: 'name', headerName: 'Name', width: 200 },
//   { field: 'date', headerName: 'Date', width: 150 },
//   { field: 'amount', headerName: 'Amount', width: 150 },
//   { field: 'type', headerName: 'Type', width: 150 },
//   { field: 'status', headerName: 'Status', width: 150 },
//   { field: 'actions', headerName: 'Actions', width: 150, renderCell: () => <Button variant="contained">Details</Button> },
// ];

// function Transactions() {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ height: 600, width: '100%' }}>
//       <Typography variant="h4" gutterBottom>Transactions</Typography>
//       <Box display="flex" justifyContent="space-between" mb={2}>
//         <TextField label="Search" variant="outlined" />
//         <Select defaultValue="" displayEmpty>
//           <MenuItem value="">Transaction Type</MenuItem>
//           <MenuItem value="Income">Income</MenuItem>
//           <MenuItem value="Expense">Expense</MenuItem>
//         </Select>
//         <Select defaultValue="" displayEmpty>
//           <MenuItem value="">All Status</MenuItem>
//           <MenuItem value="Accepted">Accepted</MenuItem>
//           <MenuItem value="Pending">Pending</MenuItem>
//           <MenuItem value="Rejected">Rejected</MenuItem>
//         </Select>
//         <Button variant="contained" onClick={() => navigate('/add-new')}>Add New</Button>
//       </Box>
//       <DataGrid rows={transactions} columns={columns} pageSize={5} />
//     </Box>
//   );
// }

// export default Transactions;


import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography, Select, MenuItem, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'amount', headerName: 'Amount', width: 150 },
  { field: 'type', headerName: 'Type', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'actions', headerName: 'Actions', width: 150, renderCell: () => <Button variant="contained">Details</Button> },
];

function Transactions({ transactions }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <Typography variant="h4" gutterBottom>Transactions</Typography>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <TextField label="Search" variant="outlined" />
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
        <Button variant="contained" onClick={() => navigate('/add-new')}>Add New</Button>
      </Box>
      <DataGrid rows={transactions} columns={columns} pageSize={5} />
    </Box>
  );
}

export default Transactions;

