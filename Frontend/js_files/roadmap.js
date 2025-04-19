let roadmapJSON = {};

// Get the currently selected level
const currentLevel = document.getElementById('level');
const roadmapBody = document.getElementById('roadmap-body');
const errorMessage = document.getElementById('roadmap-error');

// Fetch roadmap data from the API
fetch('http://localhost:3000/roadmap')
    .then(res => res.json())
    .then(data => {
        roadmapJSON = data;
        localStorage.setItem("roadmap", JSON.stringify(data));
        // Display content from the current level
        displayTableData(currentLevel.value);
    })
    .catch(error => {
        console.log("Could not fetch data", error);
        const localData = localStorage.getItem("roadmap");
        if (localData) {
            roadmapJSON = JSON.parse(localData);
            displayTableData(currentLevel.value);
        } else {
            errorMessage.textContent = "Data Unavailable. Please try again later";
            errorMessage.classList.add("block");
            errorMessage.classList.remove("hidden");
        }
    });

// If the level value changes, display that level-specific data
currentLevel.addEventListener("change", () => {
    displayTableData(currentLevel.value);
});

// Function to diplay level-specific module data
function displayTableData(level) {
    // Clear the current table
    roadmapBody.innerHTML = "";

    // Get the modules of currently selected level from the roadmap JSON
    const modules = roadmapJSON[level];

    // Display each module
    console.log(modules.length)
    modules.forEach(module => {
        // Module row
        const tableRow = document.createElement("tr");
        tableRow.className = "odd:bg-white even:bg-neutral-50";

        // Module code
        const codeData = document.createElement("td");
        codeData.textContent = module["moduleCode"];
        codeData.className = "py-3 text-center";

        // Module name
        const nameData = document.createElement("td");
        nameData.textContent = module["moduleName"];
        nameData.className = "py-3 text-center";

        // Module credits
        const creditsData = document.createElement("td");
        creditsData.textContent = module["credits"];
        creditsData.className = "py-3 text-center";

        // Module coursework type
        const courseworkData = document.createElement("td");
        courseworkData.textContent = module["assessmentType"].charAt(0).toUpperCase() + module["assessmentType"].slice(1);
        courseworkData.className = "py-3 text-center";

        // Module blocker
        const blockerData = document.createElement("td");
        const blockerFlag = module["blockerModule"];
        blockerData.innerHTML = blockerFlag ? `&#9989;` : `&#10060;`;
        blockerData.className = "py-3 text-center";

        tableRow.appendChild(codeData);
        tableRow.appendChild(nameData);
        tableRow.appendChild(creditsData);
        tableRow.appendChild(courseworkData);
        tableRow.appendChild(blockerData);

        roadmapBody.appendChild(tableRow);
    });
}