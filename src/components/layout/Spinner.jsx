import React, { Fragment } from 'react'
import spin from "./spin.gif";


function Spinner() {

    return <Fragment>
        <img src={spin} alt="Loading..." style={{ width: "200px", margin: "auto", display: "block" }} />
    </Fragment>

}



export default Spinner
