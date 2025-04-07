
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