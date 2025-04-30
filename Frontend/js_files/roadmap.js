let roadmapJSON = {};

// Get the currently selected level
const currentLevel = document.getElementById('level');

// Table elements
const roadmapBody = document.getElementById('roadmap-body');
const errorMessage = document.getElementById('roadmap-error');

// Download and email buttons
const downloadBtn = document.getElementById('roadmap-download');
const emailBtn = document.getElementById('roadmap-email');

document.addEventListener('DOMContentLoaded', () => {
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

    // Event listener for download button
    downloadBtn.addEventListener('click', async () => {
        try {
            const res = await fetch('http://localhost:3000/roadmap/pdf');

            if (!res.ok) {
                throw new Error("Internal Server Error", res.status);
            }

            // Get the file
            const file = await res.blob();

            // Create a temporary URL for the file
            const fileURL = window.URL.createObjectURL(file);
            const fileLink = document.createElement('a');
            fileLink.href = fileURL;

            // Simulate user click to download file
            fileLink.download = 'BScCS_UoL_roadmap.pdf';
            fileLink.click();

            // Clean-up
            window.URL.revokeObjectURL(fileURL);

        } catch (error) {
            console.log(error);
            alert("Something went wrong! Please try again later");
        }
    });

    // Event listener for send email button
    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sendEmail();
    });
});


// Function to diplay level-specific module data
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

// Function to send email
async function sendEmail() {
    // User email input
    const userEmail = document.getElementById('email').value;

    // Alert if no email is provided
    if (!userEmail) {
        alert("User Email Required");
        return;
    }

    try {
        alert("Sending email...");

        const res = await fetch('http://localhost:3000/roadmap/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userEmail })
        });

        // Throw an error if failed to send email
        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        // Success message
        alert("Email sent successfully");

        // Clean-up
        document.getElementById('email').value = "";

    } catch (error) {
        alert("Failed to send email. Please try again later");
        console.log(error);
    }
}