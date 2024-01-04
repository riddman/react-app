
import ListGroup from "./components/ListGroup";

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
    return <div><ListGroup items={cities} heading="Cities" onSelect={handleSelectItem}/></div>
}

export default App;