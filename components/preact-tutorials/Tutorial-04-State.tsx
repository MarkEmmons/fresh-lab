import { render} from "preact";
import { Component, ComponentChildren } from "preact";

type MyButtonProps = {

	style: { color: string };
	onClick: () => void;
	children: ComponentChildren;
};

function MyButton({ style, onClick, children }: MyButtonProps) {
	return <button style={style} onClick={onClick}>{children}</button>
}

/// Function Component

//import { useState } from 'preact/hooks';

//export default function StateCounter() {
//
//	const [count, setCount] = useState(1);
//
//	const clicked = () => {
//		setCount(count + 1);
//	}
//
//	return (
//		<div>
//			<p class="count">Count: {count}</p>
//			<MyButton style={{ color: 'purple' }} onClick={clicked}>Click me</MyButton>
//		</div>
//	);
//}

/// Class Component

export default class StateCounter extends Component {

	state = { count: 1 };

	clicked = () => {
		this.setState({count: (this.state.count + 1)});
	}

	render() {
		return (
			<div>
				<p class="count">Count: {this.state.count}</p>
				<MyButton style={{ color: 'purple' }} onClick={this.clicked}>Click me</MyButton>
			</div>
		);
	}
}