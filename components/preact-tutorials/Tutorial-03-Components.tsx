import { Component, ComponentChildren } from "preact";

type MyButtonProps = {

	style: { color: string };
	onClick: () => void;
	children: ComponentChildren;
};

function MyButton({ style, onClick, children }: MyButtonProps) {
	return (
		<button style={style} onClick={onClick}>{children}</button>
	);
}

/// Function Component

//export default function ButtonComponent() {
//
//	const clicked = () => {
//		console.log('Hello!');
//	}
//
//	return (
//		<div>
//			<p class="count">Count:</p>
//			<MyButton style={{ color: 'purple' }} onClick={clicked}>Click me</MyButton>
//		</div>
//	);
//}

/// Class Component

export default class ButtonComponent extends Component {

	clicked = () => {
		console.log('Hello!');
	}

	render() {
		return (
			<div>
				<p class="count">Count:</p>
				<MyButton style={{ color: 'purple' }} onClick={this.clicked}>Click me</MyButton>
			</div>
		);
	}
}