import "../../App.css";

export default function Form ({ onAddActivity }) {
    
    function handleSubmit (event) {
        event.preventDefault();
        const form = event.target;
        const data = {name: form.activityName.value, isForGoodWeather: form.goodWeather.checked}
        console.log(data);
        /* onAddActivity(data); */
        form.reset();
        form.activityName.focus();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Activity</h1>
            <label htmlFor="activityName">Name:</label>
            <input id="activityName" type="text" />
            <label htmlFor="goodWeather" >Good-weather activity</label>
            <input id="goodWeather" type="checkbox" ></input>
            <button type="submit">Submit</button>
        </form>
    )
}