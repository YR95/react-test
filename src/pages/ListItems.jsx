import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import CommentIcon from '@mui/icons-material/Comment';

export default function ListItems ( {todo} ) {
  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <CommentIcon/>
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined}  dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.isCompleted}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': todo.id }}
          />
        </ListItemIcon>
        <ListItemText primary={todo.name}/>
      </ListItemButton>
    </ListItem>
  );

}

