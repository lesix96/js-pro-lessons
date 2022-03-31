import React, { useState } from 'react';
import { useConverter } from '../../utils/converter';
import ConverterData from '../ConverterData/ConverterData';

const Converter = () => {
    const [dollars, setDollars] = useState(0);

    const { euros, rubles, belRubles } = useConverter(dollars);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        setDollars(Number(value));
    }

    return (
        <>
            <label htmlFor="dollars">Dollars:
                <input
                    value={dollars.toString()}
                    type="number"
                    onChange={onInputChange}
                    name="dollars"
                />
            </label>
            <ConverterData euros={euros} rubles={rubles} belRubles={belRubles} />
        </>
    )
};

export default Converter;
