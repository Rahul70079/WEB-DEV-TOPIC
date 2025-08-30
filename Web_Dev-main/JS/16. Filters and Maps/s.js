let students = [
    { id: "001", name: "Anish", sports: "Cricket" },
    { id: "002", name: "Smriti", sports: "Basketball" },
    { id: "003", name: "Rahul", sports: "Cricket" },
    { id: "004", name: "Bakul", sports: "Basketball" },
    { id: "005", name: "Nikita", sports: "Hockey" },
];



const name = students.map((curValue, index, array) => {
    return curValue.name;
})

console.loh(name)