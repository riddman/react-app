
import Alert from "./components/Alert";
import ButstrapButton from "./components/ButstrapButton";
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
    // return <div><ListGroup items={cities} heading="Cities" onSelect={handleSelectItem}/></div>
    return (
        <div className="alert alert-primary">
            <Alert>Hello <span>World 2</span></Alert>

            <ButstrapButton
                onClick={() => console.log('Clicked') }
                color="primary">Push me</ButstrapButton>
        </div>

    )
}

export default App;