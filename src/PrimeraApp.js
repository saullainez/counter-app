import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subtitulo } ) => {

    return (
        <Fragment>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo : PropTypes.string.isRequired,
    subtitulo: PropTypes.string
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;