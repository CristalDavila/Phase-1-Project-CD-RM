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
    activityCategoryElement.className = 'spacing'
    activityCategoryElement.textContent = '' + `${activity.category}` + '';
    activityDiv.append(activityCategoryElement);

    
    //when I click on a category I want an image for that category and a list of activities under that category to populate in the detailed-info section of the page.
   
    activityCategoryElement.addEventListener('click',()=>{
        displayActivityInfo(activity)
        
function displayActivityInfo(activities){
    
console.log(activities)
     const activityNameElement =document.getElementById("activity-name");
     const imageElement = document.querySelector("#category-display-image");
     const descriptionElement = document.getElementById("activity-description");

     activityNameElement.textContent= activities.name
    imageElement.src = activities.image
     descriptionElement.textContent = activities.description
   }
}
    )}}

    function matchName(activities, category) {
        return activities.filter(function (category) { return category.textContent === restaurant})}
