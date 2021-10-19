import Hello from './components/Hello';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first:'saman',
    last:'keighobadi'
  }

  const persons = [
    {id:1,name:"saman",family:"keighobadi"},
    {id:2,name:"younes",family:"ghorbani"},
    {id:3,name:"hassan",family:"hassani"},
  ]

  return (
    <div className="App">
     <Hello name='saman keighobadi' numberOfMessage={9} isLogged={false} />
     <Person name={personName} />
     <PersonList persons={persons} />
    </div>
  );
}

export default App;
