import "./App.css";
import List from "./components/list";
import Form from "./components/form";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useEffect, useState } from "react";


function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [{}],
  });
  const [isGoodWeather, setIsGoodWeather] = useState();
  const [weatherCondition, setWeatherCondition] = useState();
  const [weatherTemperature, setWeatherTemperature] = useState();

  useEffect(() => {
    async function fetchWeather () {
      const response = await fetch("https://example-apis.vercel.app/api/weather/europe");
      const data = await response.json();
      console.log(data);
      setIsGoodWeather(data.isGoodWeather);
      setWeatherCondition(data.condition);
      setWeatherTemperature(data.temperature);
    }
    fetchWeather();
  }, [])

  function handleAddActivity(data) {
    setActivities([
      { id: uid(), name: data.name, isForGoodWeather: data.isForGoodWeather },
      ...activities,
    ]);
    console.log(activities);
  }

  return (
    <div className="App">
      <h1>{weatherCondition}{weatherTemperature}</h1>
      <List isGoodWeather={isGoodWeather} activities={activities.filter(activity => activity.isForGoodWeather === isGoodWeather)} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
