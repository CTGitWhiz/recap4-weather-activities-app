import "../../App.css";


export default function List({ isGoodWeather, activities }) {
  return (
    <>
    <h1>{isGoodWeather ? "The Weather is awesome! Go outside and:" : "Bad weather! Go outside and:"}</h1>
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
    </>
  );
}
