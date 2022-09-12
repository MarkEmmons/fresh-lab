function clicked() {
	console.log('Click');
}

export default function ClickEvent() {
	return (
		<button onClick={clicked}>Click Me!</button>
	);
}