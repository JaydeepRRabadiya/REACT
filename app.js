const heading = React.createElement('div', { id: "parent", 'data-attr': "list" }, [React.createElement('div', { id: "child" },
    [React.createElement('h1', { id: "h1" }, 'I am H1 tag')],
    [React.createElement('h2', { id: "h2" }, 'I am H2 tag')]
)], [React.createElement('div', { id: "child2", 'data-attr': "list" },
    [React.createElement('h1', { id: "h1" }, 'I am H1 tag')],
    [React.createElement('h2', { id: "h2" }, 'I am H2 tag')]
)]
) // object // react element


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);