
// import axios from 'axios';
 
// import React,{Component} from 'react';
// import {useState}  from 'react';

// function Trial {
  

//     const [selectedFile, setSelectedFile] = useState(null);
    
//     // On file select (from the pop up)
//     onFileChange = event => {
    
//       // Update the state
//       this.setState({ selectedFile: event.target.files[0] });
    
//     };
    
//     // On file upload (click the upload button)
//     onFileUpload = () => {
    
//       // Create an object of formData
//       const formData = new FormData();
    
//       // Update the formData object
//       formData.append(
//         "myFile",
//         selectedFile,
//         selectedFile.name
//       );
    
//       // Details of the uploaded file
//       console.log(selectedFile);
    
//       // Request made to the backend api
//       // Send formData object
//       axios.post("api/uploadfile", formData);
//     };
    
//     // File content to be displayed after
//     // file upload is complete
//     fileData = () => {
    
//       if (selectedFile) {
         
//         return (
//           <div>
//             <h2>File Details:</h2>
             
// <p>File Name: {selectedFile.name}</p>
 
             
// <p>File Type: {selectedFile.type}</p>
 
             
// <p>
//               Last Modified:{" "}
//               {this.state.selectedFile.lastModifiedDate.toDateString()}
//             </p>
 
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <br />
//             <h4>Choose before Pressing the Upload button</h4>
//           </div>
//         );
//       }
//     };
    
    
    
//       return (
//         <div>
//             <h1>
//               GeeksforGeeks
//             </h1>
//             <h3>
//               File Upload using React!
//             </h3>
//             <div>
//                 <input type="file" onChange={this.onFileChange} />
//                 <button onClick={this.onFileUpload}>
//                   Upload!
//                 </button>
//             </div>
//           {this.fileData()}
//         </div>
//       );
    
//   }
 
//   export default Trial;

//try checkBox mui
// import * as React from 'react';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// export default function CheckboxLabels() {
//   return (
//     <FormGroup>
//       <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
//       <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
//     </FormGroup>
//   );
// }




// import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import InputLabel from '@mui/material/InputLabel';
// // import MenuItem from '@mui/material/MenuItem';
// // import FormControl from '@mui/material/FormControl';
// // import Select from '@mui/material/Select';
// import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

// export default function BasicSelect() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     // <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     // </Box>
//   );
// }
