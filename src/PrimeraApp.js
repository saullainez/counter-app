import React, { Fragment } from 'react';

const PrimeraApp = ( { saludo = "Hola mundo"} ) => {



    return (
        <Fragment>
            <h1>{ saludo }</h1>
            <p>Mi primera aplicación</p>
        </Fragment>
    );
}

export default PrimeraApp;