const root = document.getElementById('root');
ReactDOM.render(<App />, root);

function Counter() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  }; 

  return (
      <div className="counter">
        <button onClick={handleIncrement}>+</button>
        <h2>{count}</h2>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>C</button>
      </div>
  );
}

function CounterList() {
  return (
      <div>
        <Counter />
      </div>
  );
}

function App() {
  return (
    <div className="ctn">
      <h1>&nbsp;Sum = 0</h1> <br />
      <button>Add Counter</button> <br />
      <br />
      <CounterList />
    </div>
  );
}

