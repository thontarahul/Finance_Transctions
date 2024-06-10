
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { finappaxios } from "../../../../../axios";

const ActionsCell = ({ onEdit, onDelete, id }) => (
  <div>
    <button
      key={`edit_${id}`}
      onClick={onEdit}
      className="p-2 text-blue-500 hover:text-blue-700"
    >
      ✏️
    </button>
    <button
      key={`delete_${id}`}
      onClick={onDelete}
      className="p-2 text-red-500 hover:text-red-700"
    >
      🗑️
    </button>
  </div>
);

const Transactions = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [transactions, setTransactions] = useState([]);
  const token = localStorage.getItem('token');

  const columns = [
    { field: 'description', headerName: 'Description', width: 280 },
    { field: 'date', headerName: 'Date', width: 400 },
    { field: 'amount', headerName: 'Amount', width: 150 },
    { field: 'type', headerName: 'Type', width: 100 },
    { field: 'status', headerName: 'Status', width: 200 },
    {
      field: 'actions', headerName: 'Actions', width: 200,
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
    navigate(`/add-new/${editId}`);
  };

  const handleDelete = (deleteId) => {
    console.log("Deleting transaction with ID:", deleteId);
    if (window.confirm("Are you sure you want to delete?")) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      finappaxios.delete(`/api/transactions/${deleteId}`, config)
        .then(response => {
          console.log("Delete response:", response);
          alert("Delete successful");
          setTransactions(transactions.filter(transaction => transaction.id !== deleteId));
        })
        .catch(error => {
          console.error("Error deleting:", error);
        });
    }
  };

  const fetchTransactions = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await finappaxios.get('/api/transactions', config);
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
    <div className="ml-0 mt-[-5px] mr-5">
      <div className="max-w-full mx-auto">
        <h1 className="text-2xl text-indigo-900 font-semibold mb-3">Transactions</h1>
        <div className="flex justify-between items-center mb-3">
          <input
            type="text"
            className="border rounded-full px-1 py-1 mr-4"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <select className="border rounded-full px-2 py-1 mr-4">
            <option value="">Transaction Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <select className="border rounded-full px-2 py-1 mr-4">
            <option value="">All Status</option>
            <option value="Accepted">Accepted</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
          <button
            className="bg-blue-500 text-white rounded px-3 py-1"
            onClick={() => navigate('/add-new')}
          >
            Add New
          </button>
        </div>
        <div className="bg-white overflow-hidden">
          <div className="max-h-80 overflow-y-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.field}
                      className="text-left px-3 py-3 bg-rose-50 items-center"
                      style={{ width: col.width }}
                    >
                      {col.headerName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    {columns.map((col) => (
                      <td
                        key={col.field}
                        className="px-3 py-0 border-b border-gray-200"
                      >
                        {col.field === 'actions'
                          ? col.renderCell({ row: transaction })
                          : transaction[col.field]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;


