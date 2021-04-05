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
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Nombre', headerName: 'Nombre', width: 130 },
    { field: 'Precio', headerName: 'Precio',  type: 'decimal', width: 130 },
    {
      field: 'Categoria',
      headerName: 'Categoria',
      width: 130,
    },
    {
      field: 'Descripcion',
      headerName: 'Descripcion',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 300,
    }, 
    {
      field: ' ',
      headerName: '',
      width: 230,
      sortable: false,
      renderCell: (params) => (
        <strong>
        <Link to="/verproducto">
        <IconButton aria-label="view" onClick={()=>console.log(params.getValue('id'))}>        
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
  const rows=[{id:1,Nombre:'Laptop HP',Precio:2500, Categoria: 'Laptop',Descripcion:'8GB RAM 512 GB HDD'},
            {id:2,Nombre:'Laptop DELL',Precio:2500, Categoria: 'Laptop',Descripcion:'8GB RAM 512 GB HDD'},
            {id:3,Nombre:'Laptop Lenovo',Precio:2500, Categoria: 'Laptop',Descripcion:'8GB RAM 512 GB HDD'},
            {id:4,Nombre:'Laptop Toshiba',Precio:2500, Categoria: 'Laptop',Descripcion:'8GB RAM 512 GB HDD'},
            {id:5,Nombre:'Laptop Acer',Precio:2500, Categoria: 'Laptop',Descripcion:'8GB RAM 512 GB HDD'},
            {id:6,Nombre:'Laptop Alien',Precio:2500, Categoria: 'Laptop',Descripcion:'8GB RAM 512 GB HDD'},
            {id:7,Nombre:'Laptop HP',Precio:2500, Categoria: 'Laptop',Descripcion:'8GB RAM 512 GB HDD'},
            {id:8,Nombre:'Laptop DELL',Precio:2500, Categoria: 'Laptop',Descripcion:'8GB RAM 512 GB HDD'},
            {id:9,Nombre:'Laptop Lenovo',Precio:2500, Categoria: 'Laptop',Descripcion:'8GB RAM 512 GB HDD'},
            {id:10,Nombre:'Laptop Acer',Precio:2500, Categoria: 'Laptop',Descripcion:'8GB RAM 512 GB HDD'},
            {id:11,Nombre:'Laptop Toshiba',Precio:2500, Categoria: 'Laptop',Descripcion:'8GB RAM 512 GB HDD'},
            {id:12,Nombre:'Laptop HP',Precio:2500, Categoria: 'Laptop',Descripcion:'8GB RAM 512 GB HDD'}
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
            <div style={{ height: 450, width: 1000 }}>
                <DataGrid 
                rows={rows} 
                columns={columns} 
                pageSize={10} 
                Button
                  />
            </div>
        </div>
    </div>
  );
}

export default Admin_Productos;