import React, {useEffect, useState} from "react";
import axios from "axios";

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

const Countdown = ({ hr, min, sec }) => {
    const [over, setOver] = useState(false);
    const [paused, setPaused] = useState(true);
    const [[h, m, s], setTime] = useState([hr, min, sec]);

    const tick = () => {
        if (paused || over) {
            return;
        }
        if (h === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s === 0) {
            setTime([h, m - 1, 59]);
        } else {
            setTime([h, m, s - 1]);
        }
    };

    const handleReset = () => {
        setTime([hr, min, sec]);
        setPaused(true);
        setOver(false);
    };

    const handlePause = () => setPaused(!paused);

    const fmt = (val) => val.toString().padStart(2, '0');

    useEffect(() => {
        let ticker = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(ticker);
        };
    });

    return (
        <>
            <h3 className="countdown">{`${fmt(h)}:${fmt(m)}:${fmt(s)}`}</h3>
            <button onClick={handlePause}>{paused ? 'Start' : 'Pause'}</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

const newStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

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

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
    }, [])
    axios.get("http://pokeapi.co/api/v2/pokemon").then(res => {
        setPokemon(res.data.results.map(p=>p.name))
    })

    return (
        <>
            <div>Hello World!</div>
            <div style={{color: "red"}}>Adding red colour in line</div>
            <div style={newStyle}>Adding new style in app</div>
            <div>{ name }</div>
            <div>{ 2 + 2 }</div>
            <Welcome/>
            <Data/>
            <div>Current count: {count}</div>
            <div>Previous count: {prevCount}</div>
            <button onClick={handleClick}>Increment</button>

            <div>
                <Countdown hr={1} min={45} sec={0} />
            </div>

            {pokemon.map(p=>(
                <div key={p}>{p}</div>
            ))}
        </>
    )
};

export default App;

