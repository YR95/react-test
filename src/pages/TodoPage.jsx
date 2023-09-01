import * as React from 'react';
import List from '@mui/material/List';
import Lists from './Lists';


const todoListA = [
  {
    id: '1',
    name: 'Name 1',
    isCompleted: false,
  },
  {
    id: '2',
    name: 'Name 2',
    isCompleted: true,
  },
];

export default function TodoPage () {

  return (

    <Lists  todolist={todoListA}  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}  />


  );

}

