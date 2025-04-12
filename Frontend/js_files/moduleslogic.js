//gets the module list element and then grabs the level attribute, so we know what page the user is on
let moduleList = document.getElementById('module_list');
level = moduleList.getAttribute('level')

//function will take the level variable as an argument as the page prop.
const handleSelect = (page) => {
    //gets the module details element to update the selected module inside
    let moduleDetails = document.getElementById('module_details')

    //add a click listener to the module list
    moduleList.addEventListener('click', (e) => {
        //checks whether the user is clicking on a 'LI' item
        if(e.target.tagName === 'LI'){
            //gets the id and converts to a number
            let moduleId = parseInt(e.target.getAttribute('id'));
            //looks through the module data object from lvl456.js and uses page/level to choose the module level, then find the matching id
            let selectedModule = modules[page].find(item => item.id === moduleId)
            //safety check in case of error
            if(selectedModule) {
                console.log(`module: ${selectedModule.title}`);
            } else {
                console.log('error selected')
                return;
            }

            //updates the inner html of the module details to the selected module data
            moduleDetails.innerHTML = `
                <h2 class="text-bold text-2xl text-white text-shadow-lg">
                    ${selectedModule.title}
                </h2>
                <p class="bg-white p-4 m-2 rounded-md">
                    ${selectedModule.description}
                </p>
                <div class="flex justify-between m-4 h-full">
                    <section class="self-end space-y-2">
                    <h3 class="text-bold">
                        Credits
                    </h3>
                    <p class="text-white">
                        ${selectedModule.credits}
                    </p>
                    </section>
                    <section class="self-end space-y-2">
                        <h3 class="text-bold">
                            Assessment
                        </h3>
                        <p class="text-white">
                            ${selectedModule.assessment[0]}
                        </p>
                         <p class="text-white">
                            ${selectedModule.assessment[1]}
                        </p>
                    </section>
                </div>`
        }
    })
}

//call the function with the correct level passed in
handleSelect(level);