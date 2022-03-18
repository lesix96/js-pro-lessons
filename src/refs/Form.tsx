import React, { useState } from 'react';
import { POSITIONS } from './mock-data';

export const Form11 = () => {
    const [inputText, setInputText] = useState('');
    const [textareaText, setTextareaText] = useState('');
    const [showData, setShowData] = useState({ name: '', text: '', position: '' });
    const [select, setSelect] = useState('');

    // @ts-ignore
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    // @ts-ignore
    const handleTextareaChange = (e) => {
        setTextareaText(e.target.value);
    }

    // @ts-ignore
    const handleSelect = (e) => {
        setSelect(e.target.value);
    }

    // @ts-ignore
    const handleShow = (e) => {
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

export class Form22 extends React.Component {
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

    // @ts-ignore
    /*handleInputChange = ({ target: { value } }) => {
        // @ts-ignore
        console.log(this.el.value);
        this.setState({
            inputText: value,
        })
    }

    // @ts-ignore
    handleTextareaChange = ({ target: { value } }) => {
        this.setState({
            textareaText: value,
        })
    }

    // @ts-ignore
    handleSelect = ({ target: { value } }) => {
        this.setState({
            selectedPosition: value,
        })
    }*/

    // @ts-ignore
    handleData = (e) => {
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

    // getRef = (node) => { this.el = node } // так во внутреннюю переменную el присваивается ссылка на узел элемента
    // а значение ref на инпуте будет результатом вызова getRef
    // является устаревшим способом способом и был заменен с 16 версии на createRef

    inputRef = React.createRef(); // ссылки на соответствующие элементы
    textareaRef = React.createRef();
    selectRef = React.createRef();

    // и теперь 3 метода мы можем заменить одним
    handleChange = () => {
        this.setState({
            // @ts-ignore
            inputText: this.inputRef.current.value,
            // @ts-ignore
            textareaText: this.textareaRef.current.value,
            // @ts-ignore
            selectedPosition: this.selectRef.current.value,
        })
    }

    componentWillMount() {
        console.log('componentWillMount', this.inputRef);
    }

    componentDidMount() {
        console.log('componentDidMount', this.inputRef);
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
                            // ref={this.getRef}

                            // @ts-ignore
                            ref={this.inputRef}
                            type="text"
                            name="name"
                            value={inputText}
                            onChange={this.handleChange}
                        />
                    </label> {/*// привязывание к label = оборачивание в него*/}

                    <br />
                    {/*Textarea*/}
                    <label htmlFor="text">Text:</label> {/*// привязывание при помощи htmlFor={id элемента} */}
                    <textarea
                        // @ts-ignore
                        ref={this.textareaRef}
                        id="text"
                        name="text"
                        value={textareaText}
                        onChange={this.handleChange}
                    />

                    <br />

                    <select
                        // @ts-ignore
                        ref={this.selectRef}
                        value={this.state.selectedPosition}
                        onChange={this.handleChange}
                    >
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
