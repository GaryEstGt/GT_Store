import Menu from './Menu'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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
    height: 750,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

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

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div>
      <Menu/>
      <br/>
      <br/>
    <div className={classes.root}>
      <GridList cellHeight={200} cols={4} className={classes.gridList}>
        {rows.map((rows) => (
          <GridListTile key={rows._id}>
            <img src="https://drive.google.com/uc?id=1IJNxOkF_2PQ9UmevXMBIcm9bQ3owGIwv" alt={rows.product_name} />
            <GridListTileBar
              title={rows.product_name}
              subtitle={<span> {rows.product_price}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${rows.product_name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
}
