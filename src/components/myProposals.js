import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import {connect} from 'react-redux';
import {saveBookDetails} from '../actions/saveBookDetails';

function MyProposals(props){
    
    const [myProposals, setmyProposals] = useState([]);
    const [statusRequired, setStatusRequired] = useState({});
    const [fromDateRequired, setFromDateRequired] = useState({});
    const [toDateRequired, setToDateRequired] = useState({});
    
    function getMyProposals() {
         ;
        let curUId = localStorage.getItem("userid");
        let queryString = "";
        
        // axios.get("http://localhost:4000/book")
        axios.get(`http://localhost:4000/book/all/${curUId}`)
            // .then(res => {bindingTypes = res.data}) 
            .then(res => { setmyProposals(res.data) })
            // .then(()=>{console.log("conslog", myOrders)})
            .catch(err => { console.log("error:", err) })
    
    }
    useEffect(() => {
        getMyProposals()        
    });

    // useEffect(() => {
    //     console.log("$myProposals", myProposals);
    // }, [myProposals]);

    function saveSelectedBook(bookId){
        axios.get(`http://localhost:4000/book/${bookId}`)
            // .then(res => {bindingTypes = res.data}) 
            .then(res => { props.saveBookDetails(res.data) })
            // .then(()=>{console.log("conslog", myOrders)})
            .catch(err => { console.log("error:", err) })            
    }

    return(
        <div>
            MyProposals component
            <ul>
            {/* {myProposals.map(p=><li>{p._id}</li>)} */}


            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">הצעות מחיר שלי</InputLabel>
                < Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={props.dataList[0]?.name}
                    // onChange={(e) => { ;props.saveBookDetails({ [props.descStr] : e.target.value })}}
                    onChange={(e) => {saveSelectedBook(e.target.value)}}
                    label="Age"
                >
                    {myProposals.map(b => {return <MenuItem value={b._id}>{b.size} {b.color} {b.format} {b.pagesNum} {b.paperType} {b.quantity} {b.bindingType} {b.price}</MenuItem>})}
                </Select>
            </FormControl>

            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // currentBook: state.book,
        currentUser: state.user
    };
};

export default connect(mapStateToProps, { saveBookDetails })(MyProposals);

// export default MyProposals;
