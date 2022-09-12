import HelloWorld from "../components/preact-tutorials/Tutorial-01-Vdom.tsx";
import ClickEvent from "../components/preact-tutorials/Tutorial-02-Events.tsx";
import ButtonComponent from "../components/preact-tutorials/Tutorial-03-Components.tsx";
import StateCounter from "../components/preact-tutorials/Tutorial-04-State.tsx";
import FocusInput from "../components/preact-tutorials/Tutorial-05-Refs.tsx";

export default function App() {
	return (
		<div>
			<h2>vdom</h2>
			<HelloWorld />

			<h2>Events</h2>
			<ClickEvent />

			<h2>Components</h2>
			<ButtonComponent />

			<h2>Components</h2>
			<StateCounter />

			<h2>Refs</h2>
			<FocusInput />
		</div>
	);
}