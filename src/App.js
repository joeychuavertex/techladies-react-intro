import React from "react";

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

    return (
        <>
            <div>Hello World!</div>
            <div>{ name }</div>
            <div>{ 2 + 2 }</div>
            <Welcome/>
            <Data/>
        </>
    )
};

export default App;

