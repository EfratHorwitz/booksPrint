import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



function NewOrder(){
    return(
        <div>
  <Button variant="contained" color="primary" size="large"> ביצוע הזמנה</Button>
  <div>
      :בחר מפרט הספר
  </div>
        </div>
    );
}
export default NewOrder;