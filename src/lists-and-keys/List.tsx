import React, {PureComponent, useState} from 'react';
import { peoples } from './mock-data';

interface IListItemProps {
    readonly item: string;
}

interface IListItemState {}

class ListItem extends PureComponent<IListItemProps, IListItemState> {
    componentDidMount() {
        console.log('componentDidMount', this.props.item)
    }

    componentDidUpdate(prevProps: IListItemProps) {
        console.log('componentDidUpdate', { prevProps: prevProps.item, currProps : this.props.item });
    }

    componentWillUnmount() {
        console.log('componentWillUnmount', this.props.item)
    }

    render() {
        const { item } = this.props;
        return <li>{item}</li>;
    }
}

export const List: React.FC = () => {
    const [people, setPeople] = useState(peoples);

    const handleClickName = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newPeople = people.map((item) => item.name === 'Alex' ? {...item, name: 'Olga'} : {...item});
        setPeople(newPeople);
    }

    const handleClickId = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
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
                    return <ListItem item={item.name} key={item.id} />
                }) }
            </ul>
        </>
    )
}
