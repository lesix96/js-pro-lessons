import React from 'react';
import LoadingHOC from './LoadingHOC/LoadingHOC';

interface IAppComponentUIProps {
    readonly data: Record<string, any>
}
interface IAppComponentUIState {}

class AppComponentUI extends React.Component<IAppComponentUIProps, IAppComponentUIState> {
    render() {
        const { data: { title } } = this.props;

        return (
            <div>{title}</div>
        );
    }
}

const AppComponent = LoadingHOC('data')(AppComponentUI); // говорим, от каких данных
// передаваемых через props, он будет зависеть, или какое поле в переданных пропсах мы будем проверять
// на пустоту

interface IPreloaderProps {}
interface IPreloaderState {
    data: Record<string, any>
}

class Preloader extends React.Component<IPreloaderProps, IPreloaderState> {
    state = {
        data: {},
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.updateState(data))
    }

    updateState = (data: IPreloaderState[keyof IPreloaderState]) => {
        window.setTimeout(() => {
            this.setState({ data })
        }, 3000);
    }

    render() {
        const { data } = this.state;

        return (
            <>
                <AppComponent data={data} />
            </>
        );
    }
};

export default Preloader;
