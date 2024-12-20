
import Alert from "./components/Alert";
import ButstrapButton from "./components/ButstrapButton";
import { useState } from 'react';
// import ListGroup from "./components/ListGroup";

// let cities = [
//     'New York 2',
//     'San Francisco',
//     'Tokyo',
//     'London',
//     'Paris'
// ];

const handleSelectItem = (item: string) => {
    console.log(item);
}

function App() {
    const [ alertVisible, setAlertVisible ] = useState(false);

    // return <div><ListGroup items={cities} heading="Cities" onSelect={handleSelectItem}/></div>
    return (
        <div>
            { alertVisible && <Alert onClose={() => { setAlertVisible(false)} }>Hello <span>World 2</span></Alert> }

            <ButstrapButton
                onClick={() => { setAlertVisible(true) }}
                color="primary">Push me</ButstrapButton>
        </div>

    )
}

export default App;