import React, {useState} from "react";

const Welcome = () => {
    const greeting = 'Welcome to React';
    return <div>{greeting}</div>;
};

const Data = () => {
    const animals = [
        { id: 1, name: "Dog"},
        { id: 2, name: "Cat"},
    ]
    return (
        <ul>
            {animals && // Only render if there's data - see 'Conditional Rendering'
                animals.map(({ id, name }) => {
                    return <li key={id}>{name}</li>;
                })}
        </ul>
    )
}


const App = () => {
    const name = "John Doe"

    const [count, setCount] = useState(0);
    const [prevCount, setPrevCount] = useState(0);

    const handleClick = () => {
        setCount((prev) => {
            setPrevCount(prev);
        });
        setCount(count + 1);
    };

    return (
        <>
            <div>Hello World!</div>
            <div>{ name }</div>
            <div>{ 2 + 2 }</div>
            <Welcome/>
            <Data/>
            <h3>Current count: {count}</h3>
            <h3>Previous count: {prevCount}</h3>
            <button onClick={handleClick}>Increment</button>
        </>
    )
};

export default App;

