import React, {PureComponent, useState} from 'react';
import { peoples } from './mock-data';

// @ts-ignore
class ListItem extends PureComponent {
    componentDidMount() {
        // @ts-ignore
        console.log('componentDidMount', this.props.item)
    }

    // @ts-ignore
    componentDidUpdate(prevProps) {
        // @ts-ignore
        console.log('componentDidUpdate', { prevProps: prevProps.item, currProps : this.props.item });
    }

    componentWillUnmount() {
        // @ts-ignore
        console.log('componentWillUnmount', this.props.item)
    }

    render() {
        // @ts-ignore
        const { item } = this.props;
        return <li>{item}</li>;
    }
}

export const List = () => {
    const [people, setPeople] = useState(peoples);

    const handleClickName = () => {
        const newPeople = people.map((item) => item.name === 'Alex' ? {...item, name: 'Olga'} : {...item});
        setPeople(newPeople);
    }

    const handleClickId = () => {
        const newPeople = people.map((item) => item.id === 2 ? {...item, id: 8} : {...item});
        setPeople(newPeople);
    }
    return (
        <>
            <h3>List of names</h3>
            <button onClick={handleClickName}>Change State Name</button>
            <button onClick={handleClickId}>Change State Id</button>
            <ul>
                { people.map((item, index) => {
                    // @ts-ignore
                    return <ListItem item={item.name} key={item.id} />
                }) }
            </ul>
        </>
    )
}
