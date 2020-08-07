const students = [
    {name: 'anik', id: 012},
    {name: 'Manik', id: 112},
    {name: 'Hanik', id: 152},
    {name: 'Panik', id: 172},
];

const names = students.map(x => x.name);
const ids =students.map(x => x.id);
const idsBigger =students.filter(x => x.id>012);

console.log(ids);
console.log(idsBigger);
