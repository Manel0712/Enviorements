import { Filter, Numbers, PersonForm } from "./components";
import { useFormFilter, usePersons, useForm } from "./hooks";

const App = () => {

	const { newName, newNumber, handleNewNameValue, handleNewNumberValue } = useForm();
	const { newFilter, handleNewFilterValue } = useFormFilter();
	const { persons, handleChangePersonsValue} = usePersons();
	const title = import.meta.env.VITE_TITLE;

	return (
		<div>
			<h2>{title}</h2>
			<Filter setNewFilter={ handleNewFilterValue }/>
			<PersonForm 
				newName={ newName } 
				setNewName={ handleNewNameValue } 
				newNumber={ newNumber }
				handleNewNumber={ handleNewNumberValue }
				persons={ persons }
				setPersons={ handleChangePersonsValue }

			/>
			<Numbers newFilter={ newFilter } persons={ persons }/>
		</div>
	);
};

export default App;
