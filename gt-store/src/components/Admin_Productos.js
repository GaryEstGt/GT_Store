import Menuadm from './Menu_adm'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Producto from './Producto.json'
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
      width: 160,
    },
  ];
  
  const rows = Producto;
  
  
  
function Admin_Productos() {
    const classes = useStyles();
    const [selectionModel, setSelectionModel] = React.useState([]);
  return (
    <div>
      <Menuadm/>
      <br/>
      <div className={classes.contenedor}>
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
        <br/>
        <br/>
        <h1>{selectionModel.map((val)=>val.Nombre)}</h1>
            <div style={{ height: 400, width: 1000 }}>
                <DataGrid 
                rows={rows} 
                columns={columns} 
                pageSize={5} 
                checkboxSelection
                onSelectionChange={(newSelection) => {
                    setSelectionModel(newSelection.rows);
                 }}
                  />
            </div>
        </div>
    </div>
  );
}

export default Admin_Productos;