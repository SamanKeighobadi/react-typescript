// import Button from "./components/Button";
import Container from "./components/Container";
import Header from "./components/Header";
// import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Loggin from "./components/state/Loggin";
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
      <>
        <Header>
          <Navbar>Sama Keighobadi</Navbar>
          <Loggin />
        </Header>
      </>
    </div>
  );
}

export default App;
