// Temporary JSON variable (To be replaced by JSON data coming from API)
const roadmapJSON = {
    "level_4": [
        { "moduleCode": "CM1005", "moduleName": "Introduction to programming I", "credits": 15, "assessmentType": "coursework", "blockerModule": true }, //pg 17 CS regs
        { "moduleCode": "CM1010", "moduleName": "Introduction to programming II", "credits": 15, "assessmentType": "coursework", "blockerModule": true },
        { "moduleCode": "CM1015", "moduleName": "Computational mathematics", "credits": 15, "assessmentType": "exam", "blockerModule": true },
        { "moduleCode": "CM1020", "moduleName": "Discrete mathematics", "credits": 15, "assessmentType": "exam", "blockerModule": true },
        { "moduleCode": "CM1025", "moduleName": "Fundamentals of computer science", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM1030", "moduleName": "How computers work", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM1035", "moduleName": "Algorithms and data structures I", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM1040", "moduleName": "Web development", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
    ],
    "level_5": [
        { "moduleCode": "CM2005", "moduleName": "Object orientated programming", "credits": 15, "assessmentType": "coursework", "blockerModule": true }, //pg 17 CS Regs 24/25
        { "moduleCode": "CM2010", "moduleName": "Software design and development", "credits": 15, "assessmentType": "exam", "blockerModule": true },
        { "moduleCode": "CM2015", "moduleName": "Programming with data", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM2045", "moduleName": "Professional practice for computer scientists", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM2025", "moduleName": "Computer security", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM2030", "moduleName": "Graphics programming", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM2035", "moduleName": "Algorithms and data structures II", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM2040", "moduleName": "Databases, networks and the web", "credits": 15, "assessmentType": "exam", "blockerModule": false },
    ],
    "level_6": [
        { "moduleCode": "CM3005", "moduleName": "Data science", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM3010", "moduleName": "Databases and advanced data techniques", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM3015", "moduleName": "Machine learning and neural networks", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM3020", "moduleName": "Artificial intelligence", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM3025", "moduleName": "Virtual reality", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM3030", "moduleName": "Games development", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM3035", "moduleName": "Advanced web development", "credits": 15, "assessmentType": "coursework ", "blockerModule": false },
        { "moduleCode": "CM3040", "moduleName": "Physical computing and the internet of things", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM3045", "moduleName": "3D Graphics and animation", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM3050", "moduleName": "Mobile development", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM3055", "moduleName": "Interaction design", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM3060", "moduleName": "Natural language processing", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM3065", "moduleName": "Intelligent signal Processing", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM3070", "moduleName": "Final project", "credits": 30, "assessmentType": "exam + Coursework", "blockerModule": false },
    ]
}

// Get the currently selected level
const currentLevel = document.getElementById('level');
const roadmapBody = document.getElementById('roadmap-body');

function displayTableData(level) {
    // Clear the current table
    roadmapBody.innerHTML = "";

    // Get the modules of currently selected level from the roadmap JSON
    const modules = roadmapJSON[level];

    // Display each module
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

displayTableData(currentLevel.value);

currentLevel.addEventListener("change", () => {
    displayTableData(currentLevel.value);
});