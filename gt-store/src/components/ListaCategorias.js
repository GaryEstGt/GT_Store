import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props) {
  const { index, style } = props;
  const categorias =['Laptops','Desktops','Perifericos','Audio','Repuestos']
  return (
     <ListItem button style={style} key={index}>
      <ListItemText primary={categorias[index]}/>
    </ListItem>
  );
}

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
            <h3>CATEGORÍAS</h3>
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={5}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
