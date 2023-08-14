fetch ("http://localhost:3000/activities")
.then(res => res.json())
.then(renderActivities);

function renderActivities(activities) {
    activities.forEach(renderActivities);
}
