import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../dummydata';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function ProductList() {


    const [data, setData] = useState(productRows);


    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'product', headerName: 'Product', width: 200,
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img className='productlistImg' src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                );
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productlistEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productlistDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        },

    ];

    return (
        <div className='productlist'>
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






