
import Alert from "./components/Alert";
import ButstrapButton from "./components/ButstrapButton";
import SimpleButton from './components/SimpleButton';
import { useState } from 'react';
import ListGroup from "./components/ListGroup";

import { BsFillCalendarCheckFill } from "react-icons/bs";

let cities = [
    'New York 2',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
];

const handleSelectItem = (item: string) => {
    console.log(item);
}

function App() {
    const [ alertVisible, setAlertVisible ] = useState(false);

    return (
        <div>
            <BsFillCalendarCheckFill color="red" size="40" />
            <SimpleButton>MyButton</SimpleButton>
        </div>
    )
    return <div><ListGroup items={cities} heading="Cities" onSelect={handleSelectItem}/></div>
    // return (
    //     <div>
    //         { alertVisible && <Alert onClose={() => { setAlertVisible(false)} }>Hello <span>World 2</span></Alert> }

    //         <ButstrapButton
    //             onClick={() => { setAlertVisible(true) }}
    //             color="primary">Push me</ButstrapButton>
    //     </div>

    // )
}

export default App;