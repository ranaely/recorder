import React, { useState } from 'react'
import Textfield from './compo/textfield'
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./index.css"
import { Link, Typography } from '@mui/material'
import './compo/style.css'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


function App() {

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [data, setData] = useState([]);




  const addData = () => {

    setData([...data, {
      name: name,
      email: email
    }
    ]);
    setName("");
    setEmail("");
  }
  const removeItem =(index)=> {
  
    let ar=data;

    ar.splice(index,1)

    setData([...ar]);



  };

  return (
    <div>

      <Textfield />
      <div>

        <br />


        <br />
        <br />
        <div className='text'>



          <Stack direction={'row'} spacing={6} >


            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              multiline
              maxRows={4}
            />



            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              multiline
              maxRows={4} />



            <Button variant="contained" color='success' onClick={addData}>click me<AddIcon /> </Button>

          </Stack>

        </div>
        <br />
        <br />
        <div className='data'>
          <div className='data_val'>



            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>


          </div>


{
            data.map((element, index) => {

              return (

               <div key={index} className='data_val' >
                
                <h4>{element.name}</h4> 
                
                <h4>{element.email} </h4>

                <Button variant='contained' color='error' onClick={removeItem}><DeleteOutlineOutlinedIcon /></Button>

</div>
              )
            })

          }
          
        

          <br />
          <br />
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="www.linkedin.com/in/rana-ali-849baa243">
              Create by Rana Ali😁💕
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>


        </div>
      </div>
    </div>
  )
}


export default App;
