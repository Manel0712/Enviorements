import { usePersons } from "../hooks"
export const DeleteButton = ({id, }) => {
	const { handleDeletePerson, setPersons } = usePersons();
      const handleDelete = () => {
        handleDeletePerson(id, setPersons);
      };

    return (
        <button onClick={handleDelete}>delete</button>
    )
}