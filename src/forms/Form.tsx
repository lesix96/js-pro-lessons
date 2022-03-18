// паттерны для работы с формами
// бест праксисы

import React, {useState} from 'react';
import { POSITIONS } from './mock-data';

export const Form1 = () => {
    const [inputText, setInputText] = useState('');
    const [textareaText, setTextareaText] = useState('');
    const [showData, setShowData] = useState({ name: '', text: '', position: '' });
    const [select, setSelect] = useState('');

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputText((e.target as HTMLInputElement).value);
    }

    const handleTextareaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setTextareaText((e.target as HTMLTextAreaElement).value);
    }

    const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
        setSelect((e.target as HTMLSelectElement).value);
    }

    const handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
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
                        type="text"
                        name="name"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                </label> {/*// привязывание к label = оборачивание в него*/}

                <br />
                {/*Textarea*/}
                <label htmlFor="text">Text:</label> {/*// привязывание при помощи htmlFor={id элемента} */}
                <textarea
                    id="text"
                    value={textareaText}
                    onChange={handleTextareaChange}
                />

                <br />

                <select value={select} onChange={handleSelect}>
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

interface IFormShowDataState {
    name: string;
    text: string;
    position: string;
};

interface IFormState {
    inputText: string;
    textareaText: string;
    selectedPosition: string;
    showData: IFormShowDataState;
};

interface IFormProps {};

export class Form2 extends React.Component<IFormProps, IFormState> {
    state = {
        inputText: '',
        textareaText: '',
        selectedPosition: '',
        showData: {
            name: '',
            text: '',
            position: '',
        }
    };

    handleInputChange = ({ target }: React.FormEvent<HTMLInputElement>) => {
        const { value } = target as HTMLInputElement;
        this.setState({
            inputText: value,
        })
    }

    handleTextareaChange = ({ target }: React.FormEvent<HTMLTextAreaElement>) => {
        const { value } = target as HTMLTextAreaElement;
        this.setState({
            textareaText: value,
        })
    }

    handleSelect = ({ target }: React.FormEvent<HTMLSelectElement>) => {
        const { value } = target as HTMLSelectElement;
        this.setState({
            selectedPosition: value,
        })
    }

    handleData = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { inputText, textareaText, selectedPosition } = this.state;
        this.setState({
            inputText: '',
            textareaText: '',
            showData: {
                name: inputText,
                text: textareaText,
                position: selectedPosition,
            }
        })
    }

    render() {
        const { inputText, textareaText, showData } = this.state;
        const { name, text, position } = showData;
        console.log({state: this.state});
        return (
            <>
                <form>
                    {/*Input*/}
                    <label htmlFor="name">Name:
                        <input
                            type="text"
                            name="name"
                            value={inputText}
                            onChange={this.handleInputChange}
                        />
                    </label> {/*// привязывание к label = оборачивание в него*/}

                    <br />
                    {/*Textarea*/}
                    <label htmlFor="text">Text:</label> {/*// привязывание при помощи htmlFor={id элемента} */}
                    <textarea
                        id="text"
                        name="text"
                        value={textareaText}
                        onChange={this.handleTextareaChange}
                    />

                    <br />

                    <select value={this.state.selectedPosition} onChange={this.handleSelect}>
                        {/*<option value="front-end">front-end</option>
                        <option value="back-end">back-end</option>
                        <option value="full-stack">full-stack</option>*/}
                        { POSITIONS.map(({ value, id, title }) => {
                            return <option value={value} key={id}>{title}</option>
                        }) }
                    </select>

                    <br />

                    {/*Submit button*/}
                    <button onClick={this.handleData}>Show</button>
                </form>

                <p>Name: {name}</p>
                <p>Text: {text}</p>
                <p>Position: {position}</p>
            </>
        )
    }
}
