import Health from "./Components/Health";
import Trainings from "./Components/Trainings";
import Trainers from "./Components/Trainer";
import Heading from "./Components/heading";
import './App.css';



function App() {
  return (
    <div className="app">
      <Heading />
      <Health />
      <Trainings />
      <Trainers />
    </div>
  );
}

export default App;
