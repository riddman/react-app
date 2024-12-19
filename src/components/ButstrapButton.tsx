import React from 'react'

interface Props {
    children: string,
    color?: 'primary' | 'secondary' | 'danger',
    onClick: () => void
}
const ButstrapButton = ({children, onClick, color = 'primary'}: Props) => {
    return (
        <button
            onClick={onClick}
            className={ 'btn btn-' + color }>{ children }</button>
    );
}

export default ButstrapButton;