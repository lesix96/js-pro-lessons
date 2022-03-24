import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { LinksComponent } from '../../components/page1-components/LinksComponent/LinksComponent';

interface IPreloaderState {
    data: any
}

const Page1 = () => {
    const [data, setData] = useState<IPreloaderState | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => updateState(data));

        const updateState = (data: IPreloaderState[keyof IPreloaderState]) => {
            window.setTimeout(() => {
                setData({ data })
            }, 3000);
        }
    }, []);

    return (
        <>
            <LinksComponent data={data} />
        </>
    )
}

export default Page1;
