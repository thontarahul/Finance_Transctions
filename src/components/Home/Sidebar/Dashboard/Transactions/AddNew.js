// // import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
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

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newTransaction = {
//       id: Date.now(),
//       name: 'Full Name', // replace with actual name if needed
//       date: date.format('MMM DD YYYY'),
//       amount: parseFloat(amount),
//       type,
//       description,
//       status: 'Pending' // default status
//     };
//     addTransaction(newTransaction);
//     saveTransactionToLocalStorage(newTransaction);
//     navigate('/home/transactions');
//   };

//   const saveTransactionToLocalStorage = (transaction) => {
//     const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
//     transactions.push(transaction);
//     localStorage.setItem('transactions', JSON.stringify(transactions));
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
//           <Button variant="contained" color="secondary" onClick={() => navigate('/home/transactions')}>Cancel</Button>
//           <Button type="submit" variant="contained" color="primary">Submit</Button>
//         </Box>
//       </form>
//     </Box>
//   );
// }

// export default AddNew;



// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Box, Button, TextField, Typography } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// import { adminaxios2 } from '../../../../../Adminaxios/Index';

// function AddNew() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const userId = localStorage.getItem('userID');
//   console.log(userId);
//   const userIds = parseInt(userId);
// console.log(userIds);
 

 
//   const [formData, setFormData] = useState({
//     userId:userIds,
//     type: '',
//     description: '',
//     amount: '',
//     date: dayjs(),
//   });
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     if (location.state) {
//       const { id, type, description, amount, date } = location.state;
//       setFormData({
//         id,
//         type,
//         description,
//         amount: amount.toString(),
//         date: dayjs(date, 'MMM DD YYYY'),
//       });
//       setEditing(true);
//     }
//   }, [location.state]);

  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log('Submitting form data:', formData); // Log form data to check if it's correct
//     try {
//       if (editing) {
//         await adminaxios2.put(`/api/transactions/${formData.id}`, formData);
//       } else {
//         await adminaxios2.post('/api/transactions/', formData);
//       }
//       navigate('/home/transactions');
//     } catch (error) {
//       console.error('Error submitting transaction:', error);
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>{editing ? 'Edit Transaction' : 'Add Transaction'}</Typography>
//       <form onSubmit={handleSubmit}>
//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <TextField
//             label="Type"
//             variant="outlined"
//             name="type"
//             value={formData.type}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Description"
//             variant="outlined"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//           />
//         </Box>
//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <TextField
//             label="Amount"
//             variant="outlined"
//             name="amount"
//             value={formData.amount}
//             onChange={handleChange}
//             required
//           />
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DatePicker
//               label="Date"
//               value={formData.date}
//               onChange={(newValue) => setFormData({ ...formData, date: newValue })}
//               renderInput={(params) => <TextField {...params} />}
//             />
//           </LocalizationProvider>
//         </Box>
//         <Box display="flex" justifyContent="flex-end">
//           <Button variant="contained" color="secondary" onClick={() => navigate('/home/transactions')}>Cancel</Button>
//           <Button type="submit" variant="contained" color="primary">{editing ? 'Update' : 'Submit'}</Button>
//         </Box>
//       </form>
//     </Box>
//   );
// }

// export default AddNew;



import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import axios from 'axios';

function AddNew() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  
  console.log(userData.id)
  console.log(userData)

  useEffect(() => {
    axios.get('http://192.168.0.127:8082/api/currentUser')
      .then((response) => {
        setUserData(response.data);
        if (response.data && response.data.id) {
          localStorage.setItem('userID', response.data.id);
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  
  // Retrieve and convert userId
  const userIdString = localStorage.getItem('userID');



  const [formData, setFormData] = useState({
    userId: parseInt(userIdString),
    type: '',
    description: '',
    amount: '',
    date: dayjs(),
  });
  const [editing, setEditing] = useState(false);

  // useEffect(() => {
  //   if (location.state) {
  //     const { id, type, description, amount, date } = location.state;
  //     setFormData({
  //       id,
  //       type,
  //       description,
  //       amount: amount.toString(),
  //       date: dayjs(date, 'MMM DD YYYY'),
  //       userId: userId
  //     });
  //     setEditing(true);
  //   }
  // }, [location.state, userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const token = localStorage.getItem('token');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting form data:', formData);
    try {
      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      };
  
      if (editing) {
        await axios.put(`http://192.168.0.127:8082/api/transactions/${formData.id}`, formData, config);
      } else {
        await axios.post('http://192.168.0.127:8082/api/transactions', formData, config);
      }
      navigate('/home/transactions');
    } catch (error) {
      console.error('Error submitting transaction:', error);
    }
  };
  

  return (
    <Box>
      <Typography variant="h4" gutterBottom>{editing ? 'Edit Transaction' : 'Add Transaction'}</Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            label="Type"
            variant="outlined"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
          <TextField
            label="Description"
            variant="outlined"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            label="Amount"
            variant="outlined"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={formData.date}
              onChange={(newValue) => setFormData({ ...formData, date: newValue })}
              slotProps={{ textField: { variant: 'outlined' } }}
            />
          </LocalizationProvider>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="secondary" onClick={() => navigate('/home/transactions')}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">{editing ? 'Update' : 'Submit'}</Button>
        </Box>
      </form>
    </Box>
  );
}

export default AddNew;


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Box, Button, TextField, Typography } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// import axios from 'axios';

// function AddNew() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState([]);
  
//   console.log(userData.id)
//   console.log(userData)

//   useEffect(() => {
//     axios.get('http://192.168.0.127:8082/api/currentUser')
//       .then((response) => {
//         setUserData(response.data);
//         if (response.data && response.data.id) {
//           localStorage.setItem('userID', response.data.id);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);
  
//   // Retrieve and convert userId
//   const userIdString = localStorage.getItem('userID');
//   const userId = parseInt(userIdString);

//   const [formData, setFormData] = useState({
//     userId: userId,
//     type: '',
//     description: '',
//     amount: '',
//     date: dayjs(),
//   });
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     if (location.state && location.state.transaction) {
//       const { id, type, description, amount, date } = location.state.transaction;
//       setFormData({
//         id,
//         type,
//         description,
//         amount: amount.toString(),
//         date: dayjs(date),
//         userId: userId
//       });
//       setEditing(true);
//     }
//   }, [location.state, userId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

  
//   const token = localStorage.getItem('token');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log('Submitting form data:', formData);
//     try {
//       const config = {
//         headers: {
//           "Authorization": `Bearer ${token}`
//         }
//       };
  
//       if (editing) {
//         await axios.put(`http://192.168.0.127:8082/api/transactions/${formData.id}`, formData, config);
//       } else {
//         await axios.post('http://192.168.0.127:8082/api/transactions', formData, config);
//       }
//       navigate('/home/transactions');
//     } catch (error) {
//       console.error('Error submitting transaction:', error);
//     }
//   };
  

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>{editing ? 'Edit Transaction' : 'Add Transaction'}</Typography>
//       <form onSubmit={handleSubmit}>
//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <TextField
//             label="Type"
//             variant="outlined"
//             name="type"
//             value={formData.type}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Description"
//             variant="outlined"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//           />
//         </Box>
//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <TextField
//             label="Amount"
//             variant="outlined"
//             name="amount"
//             value={formData.amount}
//             onChange={handleChange}
//             required
//           />
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DatePicker
//               label="Date"
//               value={formData.date}
//               onChange={(newValue) => setFormData({ ...formData, date: newValue })}
//               slotProps={{ textField: { variant: 'outlined' } }}
//             />
//           </LocalizationProvider>
//         </Box>
//         <Box display="flex" justifyContent="flex-end">
//           <Button variant="contained" color="secondary" onClick={() => navigate('/home/transactions')}>Cancel</Button>
//           <Button type="submit" variant="contained" color="primary">{editing ? 'Update' : 'Submit'}</Button>
//         </Box>
//       </form>
//     </Box>
//   );
// }

// export default AddNew;
