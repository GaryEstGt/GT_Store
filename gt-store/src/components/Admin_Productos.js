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
import axios from 'axios';
import {useEffect } from 'react';
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

  function redirVista(parametro){
    window.location.href = `/verproducto?id=${parametro}`;
  }
  function redirEditar(parametro){
    window.location.href = `/editar?id=${parametro}`;
  }
  function eliminarProducto(parametro){
    axios.delete('http://EC2Co-EcsEl-5OOEYFX1RC2G-22735838.us-east-2.elb.amazonaws.com:4200/eliminar?id='+parametro).then(result=>{
      console.log(result.data)
      alert('Producto eliminado')
      window.location.href = '/adm-prod';
    }      
    ).catch(console.log)
  }
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
        <IconButton aria-label="view" onClick={()=>redirVista(params.getValue('_id'))}>        
          <VisibilityIcon />  
        </IconButton>
        <Link to="/editar">
         <IconButton aria-label="edit" onClick={()=>redirEditar(params.getValue('_id'))}>
         <BorderColorIcon />
        </IconButton>
        </Link>
        <IconButton aria-label="delete" onClick={()=>eliminarProducto(params.getValue('_id'))} >
         <DeleteIcon />
        </IconButton>
        </strong>
      ),
    },
  ];
  
  
  
  
function Admin_Productos() {
    const classes = useStyles();
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [productos, setProductos] = React.useState([]);
    useEffect(() => {
      // Extrae productos desde la API
      const token=localStorage.getItem('token')
      console.log(token)
      const data = new URLSearchParams()
      data.append('token',token)
      axios({
        method: 'POST',
        url: 'http://EC2Co-EcsEl-5OOEYFX1RC2G-22735838.us-east-2.elb.amazonaws.com:4200/mostraradm',
        data: data
    }).then(result=>{
        if(result.status===200){
        setProductos(result.data)
         }else{
           alert('debe autenticarse nuevamente')
           window.location.href = '/login';
         }
      }      
      ).catch(console.log)
    },[productos.length]);
  return (
    <div>
      <Menuadm/>
      <br/>
      <br/>
      <br/>
      <br/>
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
                rows={productos} 
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