// Write an asynchronous function that accepts a message string and a delay 
// time in milliseconds. The function should log the message to the console
//  after the specified delay time.
// function message1(message, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(message);
//         resolve();
//       }, delay);
//     });
//   }
//   message1("Hello I am a student",2000)

function messages (message3,delay){
    setTimeout(() => {
        console.log(message3);
    }, delay);

  }
  messages("Hello,2000")


// You have an array of user IDs and a function getUserData(id) that returns a Promise with
//  user data when given a user ID. Wte an asynchronous function that fetches and logs the data 
//  for each user ID one by one, in sequence.
// function getUserData(id){   //return promise
//     console.log("user data");  
// }
// getUserData()

// let user=[{}]
// let userID=new Promise((resolve,reject)=>{
// let userID=[
//         "234455677",
//         "457689690",
//         "234790742"
//  ]
//  if(user){
//     return resolve(("id accepted"))

//  }
//  else{
//     return reject(("id not accepted")) 
//  }
// })
//  async function acceptID(){
//     let message=await userID
//     console.log({message})
//  }
//  acceptID()

//  const getUserData =(id)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve[{id:id,name:"user &{id}"}]
//         }, 2000);
//     })
//  }

//  async singleUser(userid){
//     for(let id in userid){
//         const data = 

//     }
//  }
// You have an asynchronous function performTask() that returns a Promise. The Promise resolves 
// if the task is successful and rejects if there's an error. Write a function that calls performTask()
//  and logs a custom success message if the task is successful, and a custom error message if 
//  there's an error.
// function performTask(x){
//     console.log("pass");
// }
// performTask()

// let task =[{}]
// let x=new Promise((resolve, reject) => {
//     if (task) {
//         return resolve("custom success message")
//     } else {
//         return reject("custom error message")
//     }
// })
// async function messages(){
//     let findMessage = await x
//     console.log({findMessage});
// }
// messages()
// let success =true
const performTask =() =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            success?resolve():reject()
        }, 2000);
    })
}

const successful =async()=>{
    try {
        await performTask()
        console.log("Task successfull");
    } catch{
        console.log("Task failed");
        // throw new Error("Task failed")
    }

}
successful();