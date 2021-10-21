import Button from "./components/Button";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "saman",
    last: "keighobadi",
  };

  const persons = [
    { id: 1, name: "saman", family: "keighobadi" },
    { id: 2, name: "younes", family: "ghorbani" },
    { id: 3, name: "hassan", family: "hassani" },
  ];

  return (
    <div className="App">
      <Hello name="saman keighobadi" numberOfMessage={9} isLogged={false} />
      <Person name={personName} />
      <PersonList persons={persons} />
      <Status status="success" />
      <Header>
        <Navbar>Sama Keighobadi</Navbar>
        <Input handleInputChange={() => console.log('input changed')} />
        <Button handleClick={() => console.log('Button clicked')} />
      </Header>
    </div>
  );
}

export default App;
