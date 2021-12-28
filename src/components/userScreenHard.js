import React from 'react';
import { connect } from 'react-redux'
// import { makeStyles } from '@material-ui/core/styles';
// import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { saveOrderDetails } from '../actions';
import BookSize from './bookSize';
import BookFormat from './bookFormat';
import NumPages from './numPages';
import PrintColor from './printColor';
import NumOfBooks from './numOfBooks';
import PaperType from './paperType';
import BindingTypeHard from './bindingTypeHard';
import printOptions from './printOptions';

function UserScreenHard(props) {

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

    function calcCost(){
        let totalSum = 0;
        let luchotNum = 0;
        let luchot = 0;
        let print = 0;
        let paper = 0;
        let dekel = 0;
        let tadbik = 0;
        let additions = 0;
        let kat = 0;
        let line = 0;
        let gilyonotNum = 0;
        var format1 = 0;
        let format2 = 0;
        // let color = 0;

        debugger;
        switch(props.order.size) {
            case ('24*35' || '22*31' || '21*28' ):
                format1 = 8;
                format2 = 16;
            return ;
            case ('16.5*24.5' || '15*23' || '14*21' ):
                format1 = 16;
                format2 = 32;
            return ;
            case ('12*17' || '11*15' || '10*14' ):
                format1 = 32;
                format2 = 64;
            return ;
        }
        luchotNum = (props.order.NumPages) / format1;
        gilyonotNum = (props.order.NumPages) / format2;

        switch(props.order.size) {
            case ('24*35' || '22*31' || '21*28' ):
                luchot = 2832;
            return ;
            case ('16.5*24.5' || '15*23' || '14*21' ):
                luchot=1416;
            return ;
            case ('12*17' || '11*15' || '10*14' ):
                luchot = 708;
            return ;
        }

        if(props.order.color == 'שחור לבן'){            
            luchot = luchot * luchotNum;
        }
        else{
            luchot = luchot * luchotNum * 4;
        }
          
        switch(props.order.size) {
            case ('24*35' || '22*31' || '21*28' ):
                print = 2832;
            return ;
            case ('16.5*24.5' || '15*23' || '14*21' ):
                print=1416;
            return ;
            case ('12*17' || '11*15' || '10*14' ):
                print = 708;
            return ;
        }

        print = (props.order.NumOfBooks) * print * luchotNum;

    }

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

            <Button variant="contained" color="primary" size="large" onClick={calcCost} > המשך </Button>
            {/* endChoose */}

            {/* <a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a> */}
            
        </div>
    )
}

const mapStateToProps = (state) => {debugger
    return {
        order: state.order
    };
};

export default connect(mapStateToProps, { saveOrderDetails })(UserScreenHard);

// export default UserScreenHard;

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