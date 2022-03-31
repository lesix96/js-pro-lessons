import React from 'react';

const ConverterData = (
    {
        euros,
        rubles,
        belRubles
    }: {
        euros: string,
        rubles: string,
        belRubles: string
    }) => {
    console.log('ConverterData');
    return (
        <>
            <p>Euro: {euros}</p>
            <p>Rubles: {rubles}</p>
            <p>BelRubles: {belRubles}</p>
        </>
    );
}

export default React.memo(ConverterData);
