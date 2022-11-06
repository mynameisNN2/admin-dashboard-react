import './userlist.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../dummydata';
import { Link } from 'react-router-dom';
import { useState } from 'react';




export default function UserList() {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 200,
            renderCell: (params) => {
                return (
                    <div className='userListuser'>
                        <img className='userlistImg' src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userlistEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userlistDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        },

    ];

    return (
        <div className='userlist'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}