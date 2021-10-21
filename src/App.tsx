import Button from "./components/Button";
import Container from "./components/Container";
import Header from "./components/Header";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
// import Hello from "./components/Hello";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";

function App() {
  // const personName = {
  //   first: "saman",
  //   last: "keighobadi",
  // };

  // const persons = [
  //   { id: 1, name: "saman", family: "keighobadi" },
  //   { id: 2, name: "younes", family: "ghorbani" },
  //   { id: 3, name: "hassan", family: "hassani" },
  // ];

  return (
    <div className="App">
      <Container styles={{ margin: "0 200px", background: "red" }}>
        <Header>
          <Navbar>Sama Keighobadi</Navbar>
          <Input value={""} handleInputChange={(event) => console.log(event)} />
          <Button
            handleClick={(event) => console.log("Button clicked", event)}
          />
        </Header>
      </Container>
    </div>
  );
}

export default App;
