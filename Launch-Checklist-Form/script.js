// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.onload = function () {
 //<!-- Fetch some planetary data -->
 fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
   response.json().then( function(json) {
      const divMissionTarget = document.getElementById("missionTarget");
      let missionTargetHeader =  document.createElement('h3');
     missionTargetHeader.innerHTML = "Mission Destination";
     divMissionTarget.appendChild(missionTargetHeader);
      // Add HTML that includes the JSON data
      let missionTargetInfo = document.createElement("ul");
      missionTargetInfo.innerHTML =` 
     
         <ol>
            <li>Name: ${json[3].name}</li>
            <li>Diameter:  ${json[3].diameter}</li>
            <li>Star:  ${json[3].star}</li>
            <li>Distance:  ${json[3].distance}</li>
            <li>Moons:  ${json[3].moons}</li>
         </ol>
         <img src = ${json[3].image}>
      `;
       divMissionTarget.appendChild(missionTargetInfo);
   });
});
   var submitButton = document.getElementById("formSubmit")
   submitButton.addEventListener("click", function(e) {
      e.preventDefault();
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]");
      
      
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === ""|| cargoInput.value === "") {
         alert("All fields are required!");
      } else if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value) || isNaN(fuelInput.value) || isNaN(cargoInput.value)){
         alert("Names must be strings, and Fuel Level and Cargo Mass must be numbers.")
      }
      let shuttleStatus = document.querySelector("h2[id=launchStatus]");
      if (fuelInput.value < 10000){
         let errorSpace = document.querySelector("div[id=faultyItems]");
         errorSpace.style.visibility = "visible";
         shuttleStatus.innerHTML = `Shuttle not ready to launch`;
         shuttleStatus.style.color = "red"
         document.querySelector("li[id=fuelStatus]").innerHTML = `${fuelInput.value} liters is not enough fuel to launch. Please add more fuel until you reach 10000 liters.`;
      } else {
         document.querySelector("li[id=fuelStatus]").innerHTML =`Fuel level high enough for launch`;
      }
      if (cargoInput.value > 10000){
         let errorSpace = document.querySelector("div[id=faultyItems]");
         errorSpace.style.visibility = "visible";
         shuttleStatus.innerHTML = `Shuttle not ready to launch`;
         shuttleStatus.style.color = "red"
         document.querySelector("li[id=cargoStatus]").innerHTML = `${cargoInput.value} kilograms is too heavy to launch. Please lighten your load until you reach 10000 kilograms or less.`;
      } else {
         document.querySelector("li[id=cargoStatus]").innerHTML =`Cargo mass low enough for launch`;
      }
      if (cargoInput.value <= 10000 && fuelInput.value >= 10000) {
         let errorSpace = document.querySelector("div[id=faultyItems]");
         errorSpace.style.visibility = "visible";
         shuttleStatus.innerHTML = `Shuttle is ready to launch`;
         shuttleStatus.style.color = "Green"
         document.querySelector("li[id=pilotStatus]").innerHTML =`${pilotInput.value} is ready for launch!`;
         document.querySelector("li[id=copilotStatus]").innerHTML =`${copilotInput.value} is ready for launch!`;
         document.querySelector("li[id=fuelStatus]").innerHTML =`${fuelInput.value} is sufficient fuel for launch!`;
         document.querySelector("li[id=cargoStatus]").innerHTML =`${cargoInput.value} is sufficient weight for launch!`;
      }
   
  

   });//End of submit button click event.
}//End of window load event.
  