import React from 'react';
import './styles.css';

// Array
/*const Column = () => ([
            <td key={3}>Data 3</td>,
            <td key={4}>Data 4</td>
        ]);*/


const style: React.CSSProperties = { color: 'red', textTransform: 'uppercase' };
// Fragment
const Column: React.FC = () => {
    /*return (
        <div>
            <td>Data 3</td> {/!*!// ячейка или колонка внутри строки*!/}
            <td>Data 4</td>
        </div>
    )*/
    return (
        <>
            <td style={style}>Data 3</td> {/*!// ячейка или колонка внутри строки*/}
            <td className="title">Data 4</td>
        </>
    )
}

export const Table: React.FC = () => {
    return (
        <table>
            <tbody>
                <tr> {/*// строка*/}
                    <td>Data 1</td> {/*// ячейка или колонка внутри строки*/}
                    <td>Data 2</td>
                    <Column />
                    {/*<Column />*/}
                </tr>
            </tbody>
        </table>
    )
}
