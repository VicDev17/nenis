import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './App.css';

function App() {
 async function getData(){
   try{
    const result = await fetch("http://localhost:5000/",{
      console.log("Estatuys")
    });
    console.log(result);
  
   }catch(error){

   }
  }
return (
    <div className="App">
      <h1>Hello world</h1>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <Button variant="contained" onClick={getData}>Search</Button>
    </div>
  );
}

export default App;
