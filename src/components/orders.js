import React, { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
//npm install ag-grid-community
//npm install ag-grid-react



export default function Orders(props) {
    function prepareLink(params) {
        if (params.data.bookId)
            return <button type="button" bookid={params.data.bookId._id} onClick={(e) => {
                debugger;
                let bookId = e.target.getAttribute('bookid');
                //Kהכניס אותו לרידקס או  לסטוראיג'
                //לעבור לקומפוננטה של סיים הזמנה
                //האם מובן?

            }}>סיים הזמנה</button>
        else
            return <span></span>
    }
    const [orders, setOrders] = useState(props.orders);
    // const [orders, setOrders] = useState([{
    //     id: 'ava4',
    //     userName: 'ישראל כהן רו"ח בע"מ',
    //     orderDate: '18/10/2022',
    //     orderStatus: 'new',
    //     bookDetails: {
    //         format: 'אלבומי',
    //         size: '19*12',
    //         paper: 'כרומו'
    //     },
    //     price: 1789
    // }, {
    //     id: 'qwy7',
    //     userName: 'חיים ישראלי',
    //     orderDate: '18/10/2018',
    //     orderStatus: 'new',
    //     bookDetails: {
    //         format: 'אלבומי',
    //         size: '19*12',
    //         paper: 'כרומו'
    //     },
    //     price: 1500
    // }]);
    //המערך לעיל אמור להתמלא מהשרת
    //either useEfect or onGridReady
    const colDefintion = [
        { field: '_id', headerName: 'מזהה הזמנה' },
        { field: 'orderDateInString', headerName: 'תאריך הזמנה' },
        { field: 'price', headerName: 'מחיר', sortable: true, filter: true },
        { field: 'bookId._id', headerName: '', colId: 'goToCompleteOrder', cellRenderer: prepareLink }
    ];

    if (props.showUser) {
        colDefintion.push({ field: 'userName', headerName: 'שם משתמש', sortable: true, filter: true });
    }
    const [columnDefs, setColumnDefs] = useState(colDefintion);

    // const onGridReady = useCallback((params) => {
    //     //אולי כאן ה
    //     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    //       .then((resp) => resp.json())
    //       .then((data) => setRowData(data));
    //   }, []);


    return (
        <div className="ag-theme-alpine" style={{ height: 400 }}>
            <AgGridReact
                frameworkComponents={{
                    prepareLink: prepareLink
                }}
                enableRtl={true}
                rowData={orders}
                columnDefs={columnDefs}
            // defaultColDef={defaultColDef}
            >
            </AgGridReact>
        </div>
    )
}