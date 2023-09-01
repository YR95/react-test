import * as React from 'react';
import List from '@mui/material/List';
import ListItems from './ListItems';
import ListItem from '@mui/material/ListItem';

export default function Lists (props) {

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.todolist.map(todo => <ListItems todo={todo}/>)}
    </List>
  );

}

