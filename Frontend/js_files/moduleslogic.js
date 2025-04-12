let moduleList = document.getElementById('module_list');
level = moduleList.getAttribute('level')

const handleSelect = (page) => {
    let moduleDetails = document.getElementById('module_details')

    moduleList.addEventListener('click', (e) => {
        if(e.target.tagName === 'LI'){
            let moduleId = parseInt(e.target.getAttribute('id'));
            let selectedModule = modules[page].find(item => item.id === moduleId)
            if(selectedModule) {
                console.log(`module: ${selectedModule.title}`);
            } else {
                console.log('error selected')
                return;
            }

            moduleDetails.innerHTML = `
                <h2>
                    ${selectedModule.title}
                </h2>
                <p>
                    ${selectedModule.description}
                </p>
                <div>
                    <section>
                    <h3>
                        Credits
                    </h3>
                    <p>
                        ${selectedModule.credits}
                    </p>
                    </section>
                    <section>
                        <h3>
                            Assessment
                        </h3>
                        <p>
                            ${selectedModule.assessment[0]}
                        </p>
                         <p>
                            ${selectedModule.assessment[1]}
                        </p>
                    </section>
                </div>`
        }
    })
}

handleSelect(level);