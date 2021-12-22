import React from 'react';
// import { connect } from 'react-redux'
// import { makeStyles } from '@material-ui/core/styles';
// import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
// import { saveOrderDetails } from '../actions';
import BookSize from './bookSize';
import BookFormat from './bookFormat';
import NumPages from './numPages';
import PrintColor from './printColor';
import NumOfBooks from './numOfBooks';
import PaperType from './paperType';
import BindingTypeHard from './bindingTypeHard';

function UserScreenHard() {

    const history = useHistory();
    // const [order, setOrder] = useState();


    function endChoose() {
        debugger;
        if(localStorage.getItem('token') != null)
            history.push("/tmpAfterReg");
            else(
                history.push("/registration")
            );
    }

    // const setParam = (key, val) => {
    //     setOrder({ ...order, [key]: val })
    // }

    return (
        <div>
            <br></br>
            <div>
                <BookSize/>
            </div><br></br>
            <div>
                <BookFormat/>
            </div><br></br>
            <div>
                <NumPages/>
            </div><br></br>
            <div>
                <PrintColor/>
            </div><br></br>
            <div>
                <NumOfBooks/>
            </div><br></br>
            <div>
                <PaperType/>
            </div><br></br>
            <div>
                <BindingTypeHard/>
            </div><br></br>

            <Button variant="contained" color="primary" size="large" onClick={endChoose}> המשך </Button>
            

            {/* <a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a> */}
            
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.order
//     };
// };

// export default connect(mapStateToProps, { saveOrderDetails })(UserScreenHard);

export default UserScreenHard;

// 1. גודל (כאן תבוא רשימה נגללת עם כל אפשרויות הגדלים המצויים)
// 2. פורמט (רגיל/אלבומי)
// 3. מס עמודים (נוסחה שתעגל את המספר למס העמודים המתאים לספר הקרוב ביותר)
// 4. סוג הנייר (רשימה)
// 5. הדפסה: ש/ל או צבעוני
// 6. סוג הכריכה (בכריכה קשה סקאי או למינציה, בכריכה רכה- צבעוני או ש/ל ואיזה למינציה מט/מבריק)
// 7. מה יש על הכריכה: בסקאי כמה ואיזה הטבעות (רשימה), בלמינציה האם כמה ואיזה השבחות
// 8. תוספות (חלונות לסימון וי פורזצ מודפס, סמניה (1 או 2), צבע (1 או 2) קופסה, אריזה
// 9. כמות
// 10. זמן נדרש (אם הלקוח רוצה זמן קצר במיוחד זה משפיע על המחיר)