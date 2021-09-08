const projects = [
	{ id: 1, name: 'Option 1', probability: 0.3 },
	{ id: 2, name: 'Option 2', probability: 0.5 },
	{ id: 3, name: 'Option 3', probability: 0.15 },
	{ id: 4, name: 'Option 4', probability: 0.05 }
]

function getRandom(projects) {
    const randomIndex = Math.floor(Math.random() * projects.length);
    return projects[randomIndex]
}

const countRepeat = 500, result = {};

for(let index = 0; index < countRepeat; index ++) {
    const projectItem = getRandom(projects);
    console.log("Project Name --- ", projectItem.name)
    if(result[projectItem.id]) {
        result[projectItem.id] ++;
    } else {
        result[projectItem.id] = 1
    }
}

console.log("Stats ---", Object.entries(result).map(item => {
    return `ID ${item[0]} = ${item[1]}`
}))