import "./App.css";
import List from "./components/list";
import Form from "./components/form";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useEffect } from "react";

const isGoodWeather = false;

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [{}],
  });

  useEffect(
    
  )

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
      <List isGoodWeather={isGoodWeather} activities={activities.filter(activity => activity.isForGoodWeather === isGoodWeather)} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
