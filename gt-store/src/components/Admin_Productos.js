import Menuadm from './Menu_adm'
import Button from '@material-ui/core/Button';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    linki:{
        textDecoration: 'none',
        outline: 'none',
        color: 'white',
    },
    contenedor:{
        marginLeft:100,
    },
      demo: {
        backgroundColor: theme.palette.background.paper,
        width: 1000,
        borderStyle: 'outset',
      },
  }));

  const columns = [
    { field: '_id', headerName: 'ID', width: 120 , hide:true},
    { field: 'Cod_prod', headerName: 'Codigo', width: 150 },
    { field: 'product_name', headerName: 'Nombre', width: 130 },
    { field: 'product_price', headerName: 'Precio',  type: 'decimal', width: 130 },
    {
      field: 'product_type',
      headerName: 'Categoria',
      width: 130,
    },
    {
      field: 'product_desc',
      headerName: 'Descripcion',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 250,
    }, 
    {
      field: ' ',
      headerName: '',
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <strong>
        <Link to="/verproducto">
        <IconButton aria-label="view" onClick={()=>console.log(params.getValue('_id'))}>        
          <VisibilityIcon />  
        </IconButton>
        </Link> 
        <Link to="/editar">
         <IconButton aria-label="edit">
         <BorderColorIcon />
        </IconButton>
        </Link>
        <IconButton aria-label="delete" onClick={()=>alert('Producto Eliminado')} >
         <DeleteIcon />
        </IconButton>
        </strong>
      ),
    },
  ];
  console.log(localStorage.getItem(1))
  const rows=[{_id:'6051704f353f6a08e8877442',Cod_prod:'COD001',product_name:'Laptop HP',product_price:2500, product_type: 'Laptop',product_desc:'8GB RAM 512 GB HDD'},
            {_id:'6051704f353f6a08e8877441',Cod_prod:'COD001',product_name:'Laptop DELL',product_price:2500, product_type: 'Laptop',product_desc:'8GB RAM 512 GB HDD'},
            {_id:'6051704f353f6a08e8877443',Cod_prod:'COD001',product_name:'Laptop Lenovo',product_price:2500, product_type: 'Laptop',product_desc:'8GB RAM 512 GB HDD'},
            {_id:'6051704f353f6a08e8877444', Cod_prod:'COD001',product_name:'Laptop Toshiba',product_price:2500, product_type: 'Laptop',product_desc:'8GB RAM 512 GB HDD'},
            {_id:'6051704f353f6a08e8877445', Cod_prod:'COD001',product_name:'Laptop Acer',product_price:2500, product_type: 'Laptop',product_desc:'8GB RAM 512 GB HDD'},
            {_id:'6051704f353f6a08e8877446', Cod_prod:'COD001',product_name:'Laptop Alien',product_price:2500, product_type: 'Laptop',product_desc:'8GB RAM 512 GB HDD'},
            {_id:'6051704f353f6a08e8877447',Cod_prod:'COD001',product_name:'Laptop HP',product_price:2500, product_type: 'Laptop',product_desc:'8GB RAM 512 GB HDD'},
            {_id:'6051704f353f6a08e8877449',Cod_prod:'COD001',product_name:'Laptop Lenovo',product_price:2500, product_type: 'Laptop',product_desc:'8GB RAM 512 GB HDD'},
            {_id:'6051704f353f6a08e8877451',Cod_prod:'COD001',product_name:'Laptop Acer',product_price:2500, product_type: 'Laptop',product_desc:'8GB RAM 512 GB HDD'},
            {_id:'6051704f353f6a08e8877452',Cod_prod:'COD001',product_name:'Laptop Toshiba',product_price:2500, product_type: 'Laptop',product_desc:'8GB RAM 512 GB HDD'},
            {_id:'6051704f353f6a08e8877453',Cod_prod:'COD001',product_name:'Laptop HP',product_price:2500, product_type: 'Laptop',product_desc:'8GB RAM 512 GB HDD'}
]
  
  
  
  
function Admin_Productos() {
    const classes = useStyles();
    const [selectionModel, setSelectionModel] = React.useState([]);
  return (
    <div>
      <Menuadm/>
      <br/>
      <div className={classes.contenedor}>
      <Link to="/nuevo" className={classes.linki}>
        <Button
                variant="contained"
                color="primary"
                className={classes.button}
                size="large"
                startIcon={<AddCircleOutlineIcon />}
                onClick={()=>console.log(selectionModel)}
            >
                Agregar Producto
            </Button>
        </Link>
        <br/>
        <br/>
            <div style={{ height: 450, width: 1100 }}>
                <DataGrid 
                rows={rows} 
                columns={columns} 
                pageSize={10} 
                Button
                getRowId={(_id) => _id._id}
                  />
            </div>
        </div>
    </div>
  );
}

export default Admin_Productos;