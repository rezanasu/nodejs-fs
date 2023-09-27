// FS --> Sudah include dari NodeJS


//====> Synchronous

const fs = require("fs")

const simpleString = "TEST"


// Menulis file menggunakan package FS
const data = fs.writeFileSync("./test.txt", simpleString, 'utf-8');



// Membaca file menggunakan package FS
let readData = fs.readFileSync("./MOCK_DATA.csv", 'utf-8');


// Convert file dari csv ke JSON
// --> bisa masukin file ke database

// Step 1 ==> convert ke dalam Array
readData = readData.split("\n");
readData.shift();

// First Element
let firstElement = readData[0];
// Before Split

firstElement = firstElement.split(";")
// After Split

let resultMovies = []
for(let i = 0; i < readData.length; i++) {
    let currentElement = readData[i];

    currentElement = currentElement.split(";");

    let newObject = {
        title: currentElement[0],
        genre: currentElement[1],
        release_date: currentElement[2],
        director: currentElement[3],
        rating: currentElement[4]
    }

    resultMovies.push(newObject)
}


fs.writeFileSync("movies.json", JSON.stringify(resultMovies), "utf-8")


// =====> Asynchronous

// Read File

fs.readFile("./MOCK_DATA.csv", "utf-8", (err, data) => {
    if(err) {
        console.log(err)
    } else {

        data = data.split("\n");
        data.shift();

        let movieArray = []
        for(let i = 0; i < data.length; i++) {
            let currentElement = data[i];

            currentElement = currentElement.split(";");

            let newObject = {
                title: currentElement[0],
                genre: currentElement[1],
                release_date: currentElement[2],
                director: currentElement[3],
                rating: currentElement[4]
            }

            movieArray.push(newObject)
        }

        // Convert ke json

        fs.writeFile("movies-async.json", JSON.stringify(movieArray), "utf-8", (err) => {
            if(err) {
                console.log(err)
            } else {
                console.log("Write successfully");
            }
        })
    }
})






// fs.writeFile("movies-async.json")


