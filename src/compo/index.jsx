import  Button  from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

import '../compo/style.css'


function Fields({name,email,index}) {
  return (
    <div className='data_val'>

              <h4>{name}</h4>
              <h4>{email}</h4>
              

              <Button variant='contained' color='error'>

              <DeleteIcon/>
              </Button>
             
            </div>
 )
}

export default Fields