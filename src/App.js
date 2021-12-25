const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h2', {}, props.name),
        React.createElement('h3', {}, props.animal),
        React.createElement('h3', {}, props.breed),
    ])
}


const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Adopt Me'),
        React.createElement(Pet, { name: 'Moti', animal: 'Dog', breed: 'Indian Dog' }),
        React.createElement(Pet, { name: 'Sheru', animal: 'Dog', breed: 'Indian Dog' }),
        React.createElement(Pet, { name: 'Goldi', animal: 'Dog', breed: 'Indian Dog' }),
    ]);
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))