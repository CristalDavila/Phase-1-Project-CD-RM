const activityDiv = document.getElementById('activities-bar');
const uniqueCategories = [];

fetch("http://localhost:3000/activities")
  .then(res => res.json())
  .then(renderActivities);

function renderActivities(activities) {
  activities.forEach(renderActivity);
}

function renderActivity(activity) {
  if (uniqueCategories.indexOf(activity.category) === -1) {
    uniqueCategories.push(activity.category);
    
    const activityCategoryElement = document.createElement('div');
    activityCategoryElement.textContent = activity.category;
    activityDiv.append(activityCategoryElement);

    activityCategoryElement.addEventListener('click',()=>{
     display.nameElement.textContent = activities.name
    })
        
    }
  }



