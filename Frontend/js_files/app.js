
// creates a function, ive used the newer es6 syntax, the alternative would be function test1() {} for line 3
const test1 = () => {
    // you grab elements like this and assign to a variable
    const element = document.getElementById('test1');

    // you can add event listeners to listen to things happen like the user clicking as butt, this a function so can add what needs to happen within
    element.addEventListener('click', (e) => {
        e.preventDefault();
        // This changes the html inside the element to whatever you want
        element.innerHTML = "I've been Clicked!";
    });
}

// call the function
test1();

// start NeuralNetwork57
function myOwnTest () {
    var secondElement = document.getElementById('myOwnTest');
    var originalText = secondElement.innerHTML;
    
    console.log('quick pull req test');
    
    secondElement.addEventListener('mouseenter', (event) => { /// e = event 
        event.preventDefault();
        secondElement.animate(
            [
              { opacity: 0.5 },
              { opacity: 1 }
            ],
            {
              duration: 500,
              easing: 'ease-in',
              fill: 'forwards'
            }
          );
        secondElement.innerHTML = "GOOD LUCK FOR THIS SEMESTER";
    });
    secondElement.addEventListener('mouseleave', () => {
        secondElement.innerHTML = originalText;
    });
    }
    
    myOwnTest();
    
    // add moduleCode, moduleName, credits, assesmentType,  assessmentWeight and blockerModule
    // end NeuralNetwork57

    // function to display side-menu on mobile and desktop

    function showMySideMenu(){
      let sideMenu = document.querySelector('.side-menu');
      sideMenu.classList.add("active");
    }

    function hideMySideMenu(){
      let sideMenu = document.querySelector('.side-menu');
      sideMenu.classList.remove("active");
    }