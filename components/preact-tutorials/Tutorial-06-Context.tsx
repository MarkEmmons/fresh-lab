import { createContext } from 'preact';
import { useState, useContext, useMemo } from 'preact/hooks';

const CounterContext = createContext({totalCount: 0});

function Counter() {

	const { totalCount, setCount } = useContext(CounterContext);

	return (
		<div style={{ background: '#eee', padding: '10px' }}>
			<p>Count: {totalCount}</p>
			<button onClick={() => setCount(totalCount+1)}>Add</button>
		</div>
	);
}

export default function App() {

	const [count, setCount] = useState(0);

	const totalCount = useMemo(() => {
		return { count, setCount }
	}, [count]);

	return (
		<CounterContext.Provider value={totalCount}>
			<div style={{ display: 'flex', gap: '20px' }}>
				<Counter />
				<Counter />
				<Counter />
			</div>
		</CounterContext.Provider>
	);
}