import "./App.css";
import List from "./components/list";
import Form from "./components/form";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  console.log(activities);
  function handleAddActivity(data) {
    setActivities([
      { id: uid(), name: data.name, isForGoodWeather: data.isForGoodWeather },
      ...activities,
    ]);
    console.log(activities);
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </div>
  );
}

export default App;
