import fetch from 'node-fetch';

// URL to fetch sample JSON data
const url = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData() {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Accessing the title of the second post
        var demoValue = data[1].title;  // Adjust based on fetched data structure
        console.log(`Demo Value: ${demoValue}`);
        console.log("Your environment is setup correctly!")
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();