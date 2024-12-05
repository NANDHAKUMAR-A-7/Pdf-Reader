//const activeScrollPara = document.getElementById(//"scroll-container");
//const activeBtn = document.getElementById("movebtn"); 

//activeBtn.addEventListener("click",function(event) {
 //   activeScrollPara.style.animation = "scroll 10s linear infinite";
//});
//const output = document.getElementById("output");

//document.getElementById("movebtn").addEventListener("click",() => {
//    let xhr = new XMLHttpRequest();
// xhr.open("GET","sample.html",true);

 //   xhr.onreadystatechange = function(){
//        if(xhr.readyState === 4 && xhr.status === 200){
//            console.log(xhr.responseText);
 //       }
// }
  
 //   xhr.send();

//});

function addNumbers() {
    // Get values from the input fields
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    // Check if the values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }
    
    // Add the numbers
    var sum = num1 + num2;

    // Display the result on the page
    document.getElementById("result").innerText = "The sum is: " + sum;
}


 // Function to delete all saved data from localStorage
 function deleteData() {
    // Clear all data from localStorage
    localStorage.clear();

    // Notify the user that data has been deleted
    alert("All data has been deleted from localStorage.");
}

// Function to delete a specific key from localStorage
function deleteSpecificData() {
    // Get the key you want to delete from localStorage
    var key = document.getElementById("keyInput").value;

    // Check if the key is in localStorage
    if (localStorage.getItem(key) !== null) {
        // Delete the specific key-value pair
        localStorage.removeItem(key);
        alert("Data for key '" + key + "' has been deleted.");
    } else {
        alert("No data found for key '" + key + "'.");
    }
}


 // Function to save user input data
 function saveData() {
    // Get the user input
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;

    // Check if both fields are filled
    if (userName && userEmail) {
        // Get the existing saved data from local storage
        var users = JSON.parse(localStorage.getItem("users")) || [];

        // Add the new user data to the list
        users.push({ name: userName, email: userEmail });

        // Save the updated list back to local storage
        localStorage.setItem("users", JSON.stringify(users));

        // Clear the input fields after saving
        document.getElementById("userName").value = "";
        document.getElementById("userEmail").value = "";

        alert("User data saved successfully!");
    } else {
        alert("Please fill in both fields.");
    }
}

// Function to search and display the saved data
function searchData() {
    // Get the search query
    var searchQuery = document.getElementById("searchBar").value.toLowerCase();

    // Get all saved users data from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Filter users by name or email that matches the search query
    var filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchQuery) || 
        user.email.toLowerCase().includes(searchQuery)
    );

    // Display the filtered results
    var resultSection = document.getElementById("searchResults");
    resultSection.innerHTML = ""; // Clear previous results

    if (filteredUsers.length > 0) {
        filteredUsers.forEach(user => {
            var userDiv = document.createElement("div");
            userDiv.classList.add("user");
            userDiv.innerHTML = `<strong>Name:</strong> ${user.name} <br> <strong>Email:</strong> ${user.email} <br><br>`;
            resultSection.appendChild(userDiv);
        });
    } else {
        resultSection.innerHTML = "No results found.";
    }
}

// Function to load and display all saved users (optional)
function loadSavedData() {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var resultSection = document.getElementById("searchResults");
    
    // Display all saved users
    users.forEach(user => {
        var userDiv = document.createElement("div");
        userDiv.classList.add("user");
        userDiv.innerHTML = `<strong>Name:</strong> ${user.name} <br> <strong>Email:</strong> ${user.email} <br><br>`;
        resultSection.appendChild(userDiv);
    });
}