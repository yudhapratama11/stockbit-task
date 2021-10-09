# stockbit-task
Stockbit Backend Task by Yudha Pratama

This task is divided into 4 folder (1, 2, 3, and 4)

## Task 1
From the task given for task number 1, my solution is to joining the same table using LEFT JOIN with connecting the column from parent for 1st table, and id for 2nd table.

## Task 2
#### Running Locally
Make sure Node.JS has been installed
#### .env
Before run server, you need to set the env
```
DB_HOST=YOUR_DB_HOST
DB_USER=YOUR_DB_USER
DB_PASS=YOUR_DB_PASS
DB_NAME=YOUR_DB_NAME
DB_PORT=YOUR_DB_PORT

PORT=YOUR_SERVER_PORT
```

To run server:
```
cd 2/
npm install
npm start
```

To run unit test:
```
cd 2/
npm install
npm run test
```

Package used:
```
axios, dotenv, express, mysql2, sequelize, chai, & mocha
```

## Task 3
From the task given for task number 3, my solution is to remove chaining if-else by using single if and returning empty if the the index is not found.

## Task 4
From the task given for task number 4, my solution is by creating 2 function to sort the string and, storing the string at hashmap. After storing to hashmap, I move the value at hashmap to new array.



