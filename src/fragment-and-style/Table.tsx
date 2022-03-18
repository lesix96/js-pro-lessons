import React from 'react';
import './styles.css';

// Array
/*const Column = () => ([
            <td key={3}>Data 3</td>,
            <td key={4}>Data 4</td>
        ]);*/


// Fragment
const Column = () => {
    /*return (
        <div>
            <td>Data 3</td> {/!*!// ячейка или колонка внутри строки*!/}
            <td>Data 4</td>
        </div>
    )*/
    return (
        <>
            <td style={{ color: 'red', textTransform: 'uppercase' }}>Data 3</td> {/*!// ячейка или колонка внутри строки*/}
            <td className="title">Data 4</td>
        </>
    )
}

export const Table = () => {

    return (
        <table>
            <tbody>
                <tr> {/*// строка*/}
                    <td>Data 1</td> {/*// ячейка или колонка внутри строки*/}
                    <td>Data 2</td>
                    {/*// @ts-ignore*/}
                    <Column />
                    {/*<Column />*/}
                </tr>
            </tbody>
        </table>
    )
}
