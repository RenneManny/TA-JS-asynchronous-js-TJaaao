// - Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.
function createPromise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomValue = Math.random();
            resolve(randomValue);
        }, delay);
    });
}

const promises = [
    createPromise(1000), // Resolves after 1 second
    createPromise(2000), // Resolves after 2 seconds
    createPromise(3000), // Resolves after 3 seconds
    createPromise(4000)  // Resolves after 4 seconds
];

Promise.all(promises)
    .then(values => {
        values.forEach((value, index) => {
            console.log(`Promise ${index + 1} resolved with value: ${value}`);
        });
    })
    .catch(error => {
        console.error('One of the promises rejected:', error);
    });




    const fetch = require('node-fetch'); // Assuming you're using Node.js or a environment where fetch is not available by default


    // - Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.


// Array of GitHub usernames
const usernames = ['user1', 'user2', 'user3', 'user4', 'user5'];

// Function to fetch user data from GitHub API
function fetchUserData(username) {
    const url = `https://api.github.com/users/${username}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch user data for ${username}`);
            }
            return response.json();
        });
}

// Array to hold promises for each user data fetch
const promises = usernames.map(username => {
    return fetchUserData(username)
        .then(userData => {
            return { username: username, followers: userData.followers };
        });
});

// Using Promise.all to wait for all promises to resolve
Promise.all(promises)
    .then(usersData => {
        usersData.forEach(userData => {
            console.log(`${userData.username} has ${userData.followers} followers.`);
        });
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });
