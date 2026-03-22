import fetch from 'node-fetch';

// URL to fetch sample JSON data
const url = 'https://dummyjson.com/users';

async function fetchData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Accessing the name of the second user
        var demoValue = data.users[1].firstName;
        console.log(`Demo Value: ${demoValue}`);
        console.log("Your environment is setup correctly!")
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();