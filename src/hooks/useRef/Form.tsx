import React, { useRef, useState } from 'react';
import { POSITIONS } from './mock-data';

export const Form = () => {
    const [inputText, setInputText] = useState('');
    const [textareaText, setTextareaText] = useState('');
    const [showData, setShowData] = useState({ name: '', text: '', position: '' });
    const [select, setSelect] = useState('');

    const inputRef = useRef<HTMLInputElement | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const selectRef = useRef<HTMLSelectElement | null>(null)

    // и теперь 3 метода мы можем заменить одним
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        console.log(e.target.value);
        setInputText((inputRef.current  as HTMLInputElement).value);
        setTextareaText((textareaRef.current as HTMLTextAreaElement).value);
        setSelect((selectRef.current as HTMLSelectElement).value);
    }
/*

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputText(e.target.value);
    }

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setTextareaText(e.target.value);
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelect(e.target.value);
    }
*/

    const handleShow = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setShowData({ name: inputText, text: textareaText, position: select });
        setInputText('');
        setTextareaText('');
    }

    console.log({inputText, textareaText, select});

    return (

    <>
        <form>
            {/*Input*/}
            <label htmlFor="name">Name:
                <input
                    ref={inputRef}
                    type="text"
                    name="name"
                    value={inputText}
                    onChange={handleChange}
                />
            </label> {/*// привязывание к label = оборачивание в него*/}

            <br />
            {/*Textarea*/}
            <label htmlFor="text">Text:</label> {/*// привязывание при помощи htmlFor={id элемента} */}
            <textarea
                ref={textareaRef}
                id="text"
                value={textareaText}
                onChange={handleChange}
            />

            <br />

            <select value={select} onChange={handleChange} ref={selectRef}>
                {/*<option value="front-end">front-end</option>
                <option value="back-end">back-end</option>
                <option value="full-stack">full-stack</option>*/}
                { POSITIONS.map(({ value, id, title }) => {
                    return <option value={value} key={id}>{title}</option>
                }) }
            </select>

            <br />

            {/*Submit button*/}
            <button onClick={handleShow}>Show</button>
        </form>

        <p>Name: {showData.name}</p>
        <p>Text: {showData.text}</p>
        <p>Position: {showData.position}</p>
    </>
    )
}
