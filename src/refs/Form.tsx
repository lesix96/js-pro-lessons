import React, {useRef, useState} from 'react';
import { POSITIONS } from './mock-data';

export const Form11 = () => {
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

export class Form22 extends React.Component<IFormProps, IFormState> {
    /* constructor(props: IFormProps) {
            super(props);

            this.inputRef = React.createRef<HTMLInputElement>();
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                inputText: '',
            }
    } */
    
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

    // setRef = (ref) => {
    //  this.ref = ref
    // } // так во внутреннюю переменную ref присваивается ссылка на узел элемента
    // а значение ref на инпуте будет результатом вызова setRef
    // является устаревшим способом способом и был заменен с 16 версии на createRef

    private inputRef = React.createRef<HTMLInputElement>(); // ссылки на соответствующие элементы
    private textareaRef = React.createRef<HTMLTextAreaElement>();
    private selectRef = React.createRef<HTMLSelectElement>();

    /*handleInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        console.log(this.el.value);
        this.setState({
            inputText: value,
        })
    }

    handleTextareaChange = ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            textareaText: value,
        })
    }

    handleSelect = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            selectedPosition: value,
        })
    }*/

    handleData = (e: React.MouseEvent<HTMLButtonElement>): void => {
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

    // и теперь 3 метода мы можем заменить одним
    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        this.setState({
            inputText: (this.inputRef.current  as HTMLInputElement).value,
            textareaText: (this.textareaRef.current as HTMLTextAreaElement).value,
            selectedPosition: (this.selectRef.current as HTMLSelectElement).value,
        })
    }

    componentWillMount(): void {
        console.log('componentWillMount', this.inputRef);
    }

    componentDidMount(): void {
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
                            // ref={this.setRef}
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
                        ref={this.textareaRef}
                        id="text"
                        name="text"
                        value={textareaText}
                        onChange={this.handleChange}
                    />

                    <br />

                    <select
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
