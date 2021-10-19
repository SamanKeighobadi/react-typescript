type PersonListProps = {
  persons: {
    name: string;
    family: string;
    id: number;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.persons.map((person) => (
        <ul key={person.id}>
          <li>
            {person.name}
            {person.family}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default PersonList;
