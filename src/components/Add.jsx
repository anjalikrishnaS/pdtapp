import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = () => {      
   
  const [form,setForm]=useState({
    productname:'',
    image:'' ,
    Price:'' ,
    category:''   
  })
  function fieldValue(e) {
   
  setForm({...form,[e.target.name]:e.target.value})  
  }
  function valueAdd(){
    console.log(form);
  }
  
  return (                                      
    <Box   
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >    
    
     
    <div>
    <TextField id="outlined-basic" label="Product name" variant="outlined"
     name='title' onChange={fieldValue} />
    </div>  
    <div>
    <TextField id="filled-basic" label="image" variant="outlined" 
    name='image' onChange={fieldValue}/>
    </div> 
    <div>
    <TextField id="standard-basic" label="price" variant="outlined"
     name='price' onChange={fieldValue} />
    </div> 

    <div>
    <TextField id="standard-basic" label="category" variant="outlined"
     name='category' onChange={fieldValue} />
    </div>


    
    <div>
     
      <Button variant='contained' onClick={valueAdd}>ADD</Button>             
          </div>
    
  </Box>
  )
}

export default Add