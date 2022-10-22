const tableBody = document.getElementById("table-body");

let events = [
    {
        time:"13:00",
        turn: "john",
        task: "coding",
        place: "3rd floor - right office",
        remarks: "on time"
    },
    {
        time:"12:09",
        turn: "doe",
        task: "coding",
        place: "2nd floor - left office",
        remarks: "on time"
    },
    {
        time:"9:10",
        turn: "liza",
        task: "coloring",
        place: "1st floor - right office",
        remarks: "cancelled"
    },
    {
        time:"18:50",
        turn: "john",
        task: "coding",
        place: "4th floor - right office",
        remarks: "on time"
    },
    {
        time:"09:30",
        turn: "doe",
        task: "cleaning",
        place: "5th floor - all office",
        remarks: "on time"
    },
    {
        time:"16:15",
        turn: "sara",
        task: "coocking",
        place: "3rd floor - kitchen",
        remarks: "on time"
    }
];

const task = ["Clean","Coding","Coloring","Drawing","Cooking","Resting","Playing","Searching"];
const remarks = ["On Time", "Cancelled","Delayed"];
let hour = 15;

function populateTable(){
    for(const event of events){
       const tableRow = document.createElement("tr");
       for(const eventDetails in event){
        const tableCell = document.createElement("td");
        console.log(`event details: ${eventDetails}`);
        const word = Array.from(event[eventDetails])
       // tableCell.innerText = eventDetails;
      // tableCell.innerText = event[eventDetails];
        for(const [index,letter] of word.entries()){
          const letterElement = document.createElement('div');

          setTimeout(()=>{
            letterElement.classList.add('flip');
            letterElement.textContent = letter;
            tableCell.append(letterElement);
          },100 * index)
        }
        tableRow.append(tableCell);
       }
       tableBody.append(tableRow);
    }
}

populateTable();

function generateRandomLetters(){
    const alphabet = 'ABCDEFGHT'
}

const shuffleUp = () => {
    events.shift();
    events.push({
        time: generateTime(),
        turn: "john",
        task: task[Math.floor(Math.random() * task.length)],
        place: "3rd floor - right office",
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
}