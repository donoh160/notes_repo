
// Code doesn't run!
// Gives outline of code


// Useful Tools

    // Print
    console.log('Stuff')

    // f-string
    let var1 = 1
    console.log(`Number of variables: ${var1}`)

    // Rounding funciton
    let longDecimal = 112.34534454;
    let roundedDecimal = Math.floor(longDecimal);
    console.log(roundedDecimal);


// Day 1

    // 01-Ins -- Interactive Charting

        // trace1 gives x,y data for one chart
        let trace1 = {
            x: xData,
            y: yData
        };

        // all traces set into array
        let data = [trace1];

        // formats plot
        let layout = {
        title: "A Plotly plot"
        };

        // displays chart
        Plotly.newPlot("plot", data, layout);
  

    // 02-Ins -- Arrays and Objects

        // Arrays

            // Create array
            let myArray = [];

            // elements can be added to arrays with the push() method
            myArray.push('a');
            myArray.push('b');
            myArray.push('c');
            myArray.push('d');

            console.log(myArray); // output: ['a', 'b', 'c', 'd']

            // access single elemet
            console.log(myArray[1]); // output: 'b'

            // update elements
            myArray[3] = 'z';
            console.log(myArray); // output: ['a', 'b', 'c', 'z']

            // range of values
            // slice(start, end)
            // returns element 1 and 2
            console.log(myArray.slice(1,3)); // output: ['b', 'c']

        // Objects

            // Creating an object
            let city = {
                name: "Chicago",
                state: "Illinois",
                area: 234.21,
                nickname: "Second City"
            };

            // Access properties in two ways

                // 1) Bracket notation
                console.log(city['name']); // output: "Chicago"

                // 2) Dot notation
                console.log(city.state); // output: "Illinois"

            // Update properties
            city.nickname = "The Windy City";

            // Add a property
            city.population = 2695598;


    // 05-Ins -- Conditionals and Iterations
        
        // Conditional

            // if statement
            if (condition1) {
                // do if condition1 is true
            } else if (condition2) {
                // do if condition1 is false and condition2 is true
            } else {
                // do if condition1 and condition2 are false
            }
            
            // logical operators
            if (condition1 && condition2) {
                // do only if condition1 and condition2 are true
            }
            
            if (condition1 || condition2) {
                // do if either condition1 or condition2 is true
            }

        // Iteration   

            // loop counter by one on each iteration
            for (let i = 0; i < 10; i++) {
                console.log("Iteration #", i);
            }
            
            // Looping through an array
            let students = ["Johnny", "Tyler", "Bodhi", "Pappas"];
            for (let j = 0; j < students.length; j++) {
                console.log(students[j]);
            }

            // for-of loop
            const a1 = ["a", "b", "c"];
            for (const element of a1) { // You can use `let` instead of `const` if you like
                console.log(element);
            }
            // 'a'
            // 'b'
            // 'c'

            // forEach
            const a2 = ["a", "b", "c"];
            a2.forEach((element) => {
                console.log(element);
            });
            // 'a'
            // 'b'
            // 'c'


    // 07-Ins -- Multiple Charts

        // Create our first trace, a bar chart
        let trace1_07 = {
            x: [0, 1, 2, 3, 4, 5],
            y: [0, 5, 10, 15, 20, 25],
            type: "bar"
        };
        
        // Create our second trace, a line chart with markers
        let trace2_07 = {
            x: [0, 1, 2, 3, 4, 5],
            y: [0, 1, 4, 9, 16, 25],
            mode: 'lines+markers',
            type: 'scatter'
        };
        
        // The data array consists of both traces
        let data_07 = [trace1_07, trace2_07];
        
        // Note that we omitted the layout object this time
        // This will use default parameters for the layout
        Plotly.newPlot("plot", data_07);

    // 09-Ins -- Functions
        
        // Takes two numbers and adds them
        function addition(a, b) {
            return a + b;
        }
        console.log(addition(44, 50));
        
        // This function accepts a parameter and iterates through an array
        function listLoop(userList) {
            for (let i = 0; i < userList.length; i++) {
            console.log(userList[i]);
            }
        }
        let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
        listLoop(friends);


// Day 2

    // 01-Ins -- Mapping and Arrow Functions

        // Mapping is used to map one array to another array using a function
        // i.e. f:a1->a2
        let array1 = ["a", "b", "c"];

        // Using the .map method to create an array
        let mapSimpleArray = array1.map(function(item) {
        return item;
        });
        console.log("Map:", mapSimpleArray);
        // 'a'
        // 'b'
        // 'c'

        // Map will also provide the index position of the array.
        // This is similar to enumerate in Python.
        let mapArrayWithIndex = theStagesOfJS.map(function(item, index) {
        return `Element ${index}: ${item}`;
        });
        console.log("Map With Index:", mapArrayWithIndex);
        // Element 0: 'a'
        // Element 1: 'b'
        // Element 2: 'c'

        // Mapping over an array of objects
        let students1 = [
            { name: "Malcolm", score: 80 },
            { name: "Zoe", score: 85 },
            { name: "Kaylee", score: 99 },
            { name: "Simon", score: 99 },
            { name: "Wash", score: 79 }
        ];
        let names = students1.map(function(student) {
        return student.name;
        });
        console.log("Names:", names);

        // Arrow Function
        // Same as regular function just easier format
        let mapArrow1 = array1.map((item) => {
            return item;
        });
        console.log("Arrow1:", mapArrow1);

        // And we can drop the `return` keyword. The return is implied.
        let mapArrow2 = array1.map(item => item);
        console.log("Arrow2:", mapArrow2);

        // We can also provide the index position of the array.
        let mapArrow3 = array1.map((item, index) => `Stage ${index}: ${item}`);
        console.log("Arrow3:", mapArrow3);


    // 03-Stu -- Plotting w/ Mapping

        // Mapping is useful for creating array of data to plot
        let trace = {
            x: searchResults.map(row => row.greekName),
            y: searchResults.map(row => row.greekSearchResults),
            type: "bar"
        };
    

    // 04-Ins -- Filtering
        // An array of objects
        let simpsons = [{
            name: "Homer",
            age: 45
        }, {
            name: "Lisa",
            age: 8
        }, {
            name: "Marge",
            age: 43
        }, {
            name: "Bart",
            age: 10
        }, {
            name: "Maggie",
            age: 1
        }];
        
        // Create a custom filtering function
        function selectYounger(person) {
            return person.age < 30;
        }
        
        // filter() uses the custom function as its argument
        let youngSimpsons = simpsons.filter(selectYounger);


    // 07-Ins -- Sorting and Slicing

        // Sorting

            // Sort the array in descending order
            let numArray = [1, 2, 3];
            numArray.sort(function compareFunction(firstNum, secondNum) {
            return secondNum - firstNum;
            });
            console.log(numArray);
            // Returns [3, 2, 1]

            // Sort the array in ascending order
            let numArray2 = [3, 2, 1];
            numArray2.sort(function compareFunction(firstNum, secondNum) {
            return firstNum - secondNum;
            });
            console.log(numArray2);
            // Returns [1, 2, 3]

            // Sort the array in ascending order, using an arrow function
            let numArray3 = [3, 2, 1];
            numArray3.sort((firstNum, secondNum) => firstNum - secondNum);
            console.log(numArray3);

            // Reverse the array
            let numArray4 = [1, 2, 3];
            numArray4.reverse();
            console.log(numArray4);

        // Slicing

            // Slice the first two names
            let names1 = ["a", "b", "c", "d"];
            let left = names1.slice(0, 2);
            console.log(left);
            // ['a', 'b']


// Day 3

    // 01-Ins -- D3 Intro
        // API url
        const url = "https://api.spacexdata.com/v4/launchpads";

        // Read in json file from API url using D3 
        const dataPromise = d3.json(url);
        console.log("Data Promise: ", dataPromise);

        // Fetch the JSON data and console log it
        // More specific than other method
        d3.json(url).then(function(data) {
        console.log(data);
        });


    // 03-Ins -- Selecting and Modifying HTML using D3

        //class text1
        let text1 = d3.select(".text1").text();
        console.log("text1 says: ", text1);

        // id text2
        let text2 = d3.select("#text2").text();
        console.log("text2 says: ", text2);

        // Modify class text1
        d3.select(".text1").text("Hey, I changed this!");

        // Capture the HTML of a selection
        let myLink = d3.select(".my-link").html();
        console.log("my-link: ", myLink);

        // Select an element's child element
        // An object is returned
        let myLinkAnchor = d3.select(".my-link>a");
        console.log(myLinkAnchor);

        // Capture the child element's href attribute
        let myLinkAnchorAttribute = myLinkAnchor.attr("href");
        console.log("myLinkAnchorAttribute: " + myLinkAnchorAttribute);

        // Change an element's attribute
        myLinkAnchor.attr("href", "https://python.org");

        // Use chaining to join methods
        d3.select(".my-link>a").attr("href", "https://nytimes.com").text("Now this is a link to the NYT!!");

        // Select all list items, then change their font color
        d3.selectAll("li").style("color", "blue");

        // Create a new element
        let li1 = d3.select("ul").append("li");
        li1.text("A new item has been added!");

        // Use chaining to create a new element and set its text
        let li2 = d3.select("ul").append("li").text("Another new item!");


    // 05-Ins -- Events, Buttons

        // Reference button from page, id='click-me'
        let button = d3.select("#click-me");

        // Reference to the input element, id='input-field'
        let inputField = d3.select("#input-field");

        // This function is triggered when the button is clicked
        function handleClick(event) {
        console.log("A button was clicked!");
        // We can use d3 to see the object that dispatched the event
        console.log(event.target);
        }

        // We can use the `on` function in d3 to attach an event to the handler function
        button.on("click", handleClick);

        // You can also define the click handler inline
        button.on("click", function(event) {
        console.log("Hi, a button was clicked!");
        console.log(event.target);
        });

        // Input fields can trigger a change event when new text is entered.
        inputField.on("change", function(event) {
        let newText = event.target.value;
        console.log(newText);
        });


    // 07-Ins -- This, Multiple Events

        // prints which button was clicked
        d3.selectAll("button").on("click", function() {
            console.log(this);
        });
        
        // prints which item from list was clicked
        d3.selectAll("li").on("click", function() {
            let listItem = d3.select(this);
            listItem.style("color", "blue");
            let listItemText = listItem.text();
            console.log(listItemText);
        });

        
    // 09-Ins -- Dropdown Events

        // Initializes the page with a default plot
        function init() {
            let data = [{
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 16] }];
        
            Plotly.newPlot("plot", data);
        }
        
        // Call updatePlotly() when a change takes place to the DOM
        d3.selectAll("#selDataset").on("change", updatePlotly);
        
        // This function is called when a dropdown menu item is selected
        function updatePlotly() {
            // Use D3 to select the dropdown menu
            let dropdownMenu = d3.select("#selDataset");
        
            // Assign the value of the dropdown menu option to a variable
            let dataset = dropdownMenu.property("value");
        
            // Initialize x and y arrays
            let x = [];
            let y = [];
        
            if (dataset === 'dataset1') {
            x = [1, 2, 3, 4, 5];
            y = [1, 2, 4, 8, 16];
            }
            else if (dataset === 'dataset2') {
            x = [10, 20, 30, 40, 50];
            y = [1, 10, 100, 1000, 10000];
            }
        
            // Note the extra brackets around 'x' and 'y'
            Plotly.restyle("plot", "x", [x]);
            Plotly.restyle("plot", "y", [y]);
        }
        
        init();






// WEEK 15

let myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 13
  });
  
  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);


