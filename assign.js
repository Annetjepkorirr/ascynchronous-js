// Write an asynchronous function that accepts a message string and a delay 
// time in milliseconds. The function should log the message to the console
//  after the specified delay time.
function message1(message, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, delay);
    });
  }
  message1("hello I am a student",2000)


// You have an array of user IDs and a function getUserData(id) that returns a Promise with
//  user data when given a user ID. Write an asynchronous function that fetches and logs the data 
//  for each user ID one by one, in sequence.

// const userIds = [1, 2, 3, 4, 5];

// async function identifyUsersData() {
//   for (const id of userIds) {
//     try {
//       const userData = await getUserData(id);
//       console.log(userData);
//     } catch (error) {
//       console.error(`Error fetching data for user ID ${id}:`, error);
//     }
//   }
// }

// You have an asynchronous function performTask() that returns a Promise. The Promise resolves 
// if the task is successful and rejects if there's an error. Write a function that calls performTask()
//  and logs a custom success message if the task is successful, and a custom error message if 
//  there's an error.
function performTask() {
    return new Promise((resolve, reject) => {
    
    });
  }
  
  async function giveTask() {
    try {
      await performTask();
      console.log("Task completed successfully!");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  giveTask();