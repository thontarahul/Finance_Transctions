// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, Button, TextField, Typography } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';

// function AddNew({ addTransaction }) {
//   const [type, setType] = useState('');
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');
//   const [date, setDate] = useState(dayjs());
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const newTransaction = {
//       id: Date.now(),
//       name: 'Full Name', // replace with actual name if needed
//       date: date.format('MMM DD YYYY'),
//       amount: parseFloat(amount),
//       type,
//       status: 'Pending' // default status
//     };
  
//     try {
//       // Make API request to create a new transaction
//       const response = await fetch('http://192.168.0.127:8082/api/transactions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newTransaction),
//       });

//     // transactions: async (date, type, amount, description)=> {
//     //     const response = await fetch('http://192.168.0.127:8082/api/transactions', {
//     //       method: 'POST',
//     //       headers: {
//     //         'Content-Type': 'application/json',
//     //       },
//     //       body: JSON.stringify({ date, type, amount, description }),
//     //     });
  
//       if (!response.ok) {
//         throw new Error('Failed to create transaction');
//       }
  
//       // Redirect to '/transactions' after successful creation
//       navigate('/Transactions');
//     } catch (error) {
//       console.error('Error creating transaction:', error);
//       // Handle error if needed
//     }
//   };
  
//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>Add Transaction</Typography>
//       <form onSubmit={handleSubmit}>
//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <TextField
//             label="Type"
//             variant="outlined"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             required
//           />
//           <TextField
//             label="Description"
//             variant="outlined"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </Box>
//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <TextField
//             label="Amount"
//             variant="outlined"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//           />
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DatePicker
//               label="Date"
//               value={date}
//               onChange={(newValue) => setDate(newValue)}
//               renderInput={(params) => <TextField {...params} />}
//             />
//           </LocalizationProvider>
//         </Box>
//         <Box display="flex" justifyContent="flex-end">
//           <Button variant="contained" color="secondary" onClick={() => navigate('/Transactions')}>Cancel</Button>
//           <Button type="submit" variant="contained" color="primary">Submit</Button>
//         </Box>
//       </form>
//     </Box>
//   );
// }

// export default AddNew;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

function AddNew({ addTransaction }) {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(dayjs());
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Date.now(),
      name: 'Full Name', // replace with actual name if needed
      date: date.format('MMM DD YYYY'),
      amount: parseFloat(amount),
      type,
      status: 'Pending' // default status
    };
  
    try {
      // Make API request to create a new transaction
      const response = await fetch('http://192.168.0.127:8082/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      });

      if (!response.ok) {
        throw new Error('Failed to create transaction');
      }
  
      // Redirect to '/transactions' after successful creation
      navigate('/Transactions'); // Ensure the path matches your route
    } catch (error) {
      console.error('Error creating transaction:', error);
      // Handle error if needed, e.g., show error message to user
    }
  };
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Add Transaction</Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            label="Type"
            variant="outlined"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            label="Amount"
            variant="outlined"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="secondary" onClick={() => navigate('/transactions')}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Box>
      </form>
    </Box>
  );
}

export default AddNew;
