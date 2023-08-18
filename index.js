const activityDiv = document.getElementById('activities-bar');
const uniqueCategories = [];

fetch("http://localhost:3000/activities")
  .then(res => res.json())
  .then(renderActivities);

function renderActivities(activities) {
  activities.forEach((activity) => renderActivity(activity, activities));

}

function renderActivity(activity, activities) {
  if (uniqueCategories.indexOf(activity.category) === -1) {
    uniqueCategories.push(activity.category);
    const activityCategoryElement = document.createElement('div');
    activityCategoryElement.className = 'spacing'
    activityCategoryElement.textContent = activity.category;
    activityDiv.append(activityCategoryElement);

    activityCategoryElement.addEventListener('click', () => {
      console.log(activities);
      console.log(activity.category);
      const detailedInfo = document.querySelector("#detailed-info")
      detailedInfo.innerHTML = ""

      const filteredActivities = activities.filter((data) => {
        return (data.category === activity.category)
      })
      console.log(filteredActivities)

      // foreach that breaks down the full category array into individual activities

      filteredActivities.forEach(singleAct => {
        displayActivityInfo(singleAct)
      })
    })
  }
}

function displayActivityInfo(activity) {
  console.log(activity)

  const activityNameElement = document.createElement("div");
  const imageElement = document.createElement("img");
  const descriptionElement = document.createElement("div")
  const orderedList = document.createElement("ul")

  activityNameElement.textContent = activity.name
  imageElement.src = activity.image
  descriptionElement.textContent = activity.description
  orderedList.append(imageElement, activityNameElement, descriptionElement)

  // appends to the div detailed-info
  const detailedInfo = document.querySelector("#detailed-info")
  detailedInfo.append(orderedList);

}

document.addEventListener("DOMContentLoaded", () => {

  const dataOne = document.querySelector("#create-task-form")
  dataOne.addEventListener("submit", (e) => {
  e.preventDefault();
  handleToDo(e.target["new-task-description"].value);
  })
})
function handleToDo(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo}`
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}
function handleDelete(e) {
  e.target.parentNode.remove()
}
