import { Component, createRef } from 'preact';
import { useRef } from 'preact/hooks';

/// Function Component

//export default function FocusInput() {
//
//	const input = useRef<HTMLInputElement>(null);
//
//	const onClick = () => {
//
//		if(input && input.current) {
//			input.current.focus();
//		}
//	};
//
//	return (
//		<div>
//			<input ref={input} placeholder="Hello World!" />
//			<button onClick={onClick}>Focus input</button>
//		</div>
//	);
//}

/// Class Component

export default class FocusInput extends Component {

	input = createRef<HTMLInputElement>();

	onClick = () => {

		if(this.input && this.input.current) {
			this.input.current.focus();
		}
	};

	render() {

		return (
			<div>
				<input ref={this.input} placeholder="Hello World!" />
				<button onClick={this.onClick}>Focus input</button>
			</div>
		);
	}
}