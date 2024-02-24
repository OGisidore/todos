export const initTasks = (tasks=[]) =>{
    let newTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    
    if(newTasks.length === 0){
        return tasks
    }
    return newTasks
}
export const saveTasks = (newTasks) =>{
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    return newTasks
}