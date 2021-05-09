import MenuR from './MenuR'
import React from 'react';
import {useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 400,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export default function TitlebarGridList() {
  const classes = useStyles();
  const [productos, setProductos] = React.useState([]);
  useEffect(() => {
    // Extrae productos desde la API
    axios.get('http://EC2Co-EcsEl-5OOEYFX1RC2G-22735838.us-east-2.elb.amazonaws.com:4200/mostrar').then(result=>{
      console.log(result.data)
       setProductos(result.data)
    }      
    ).catch(console.log)
  },[productos.length]);
  return (
    <div>
      <MenuR/>
      <br/>
      <br/>
      <br/>
        <br/>
    <div className={classes.root}>
      <GridList cellHeight={200} cols={3} className={classes.gridList}>
        {productos.map((rows) => (
          <GridListTile key={rows._id}>
            <img src={rows.product_foto} alt={rows.product_name} />
            <GridListTileBar
              title={rows.product_name}
              subtitle={<span> {rows.product_price}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
}
