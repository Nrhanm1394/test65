import React, { useState , useEffect } from "react";
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: 50,
      width: '50ch',
    }, 
  },
  iconButton: {
    marginTop: 50,
  },
}));

function App() {
  const [nameData, setNameData] = useState();
  const [search,setSearch] = useState ('');

useEffect(() =>{
  axios.get('http://localhost:3000/trips')  
    .then((response) => {
      setNameData(response.data);

    })
    .catch((Error)=>{
      console.log(Error)
    })
});
//title,eid,url,description,photo,tags
const Data = (props) => {
  const {title,url,Description,photos,tags} = props;

  const classes = useStyles();

}
return (
  <div>
  <form>
    <div>
      <TextField
          onChange={(event) => setSearch(event.target.value)}
          id="outlined-full-width"
          style={{ marginLeft: '50%'}}
          placeholder="search"
          margin="normal"
          variant="outlined"
        />
    </div>
  </form>
  </div>
);

}
export default App

