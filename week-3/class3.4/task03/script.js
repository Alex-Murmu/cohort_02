const tasks = [
    {name:"alex",
        age:22,
        price:2000,
        completed:false
    },
    {name:"alex",
        age:22,
        price:2000,
        completed:false
    },
    {name:"simon",
        age:22,
        price:2000,
        completed:false
    },
    {name:"simon",
        age:22,
        price:2000,
        completed:false
    }

]
const app3 = Object.keys(tasks)

const index = 2;
function toggleCompleted(index) {
   return  tasks[index].completed = !tasks[index].completed;
  }

  console.log(toggleCompleted(index))