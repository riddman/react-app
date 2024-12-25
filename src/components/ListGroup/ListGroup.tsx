import { Fragment } from 'react';
import { MouseEvent } from "react";
import { useState } from 'react';
// import styles from './ListGroup.module.css';
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    padding: 5px 0;
`

interface ListProps {
    items: string[],
    heading: string,
    onSelect: (item: string) => void
}

function ListGroup(props: ListProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const emptyMessage = () => {
        return props.items.length === 0 ? <p>No item found</p> : null;
    }

    const handleClick = (event:MouseEvent, item: String, index: number) => {
        setSelectedIndex(index);
        console.log(`Clicked item: ${item} ${index}`, event);
    }

    return (
        <Fragment>
            <h1>{ props.heading }</h1>
            { emptyMessage() }
            <List>
                {props.items.map((item, index) => {
                    return <ListItem key={index}
                        onClick={(event) => {
                            handleClick(event, item, index);
                            props.onSelect(item)
                        }}

                        className={ 'list-group-item ' + (selectedIndex == index ? 'active' : '') }>{item}</ListItem>
                })}
                <ListItem>An item</ListItem>
            </List>
        </Fragment>
    );
}

export default ListGroup;
