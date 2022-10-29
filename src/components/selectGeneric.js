import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveBookDetails } from '../actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

function SelectGeneric(props){

    let attribute = "";
    let title = "בענכימי";

    useEffect(()=>{
        attribute = props.descStr;
        debugger;
        title = props.myTitle;
        debugger;
    },[]);

    return (
        <div>
            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">{props.myTitle}</InputLabel>
                < Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={props.dataList[0]?.name}
                    onChange={(e) => {debugger;props.saveBookDetails({ [props.descStr] : e.target.value })}}
                    label="Age"
                >
                    {props.dataList?.map(pc => {return <MenuItem value={pc.name}>{pc.name}</MenuItem>})}
                </Select>
            </FormControl>
        </div>
    )



}

export default connect(null, { saveBookDetails })(SelectGeneric);