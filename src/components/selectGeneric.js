import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

function SelectGeneric(props){

    let attribute = props.descStr;

    useEffect(()=>{

    },[]);

    return (
        <div>
            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">:צבע הדפסה</InputLabel>
                < Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={2}
                    onChange={(e) => props.saveOrderDetails({ attribute : e.target.value })}
                    label="Age"
                >
                    {props.dataList?.map(pc => {return <MenuItem value={pc.name}>{pc.name}</MenuItem>})}
                </Select>
            </FormControl>
        </div>
    )



}