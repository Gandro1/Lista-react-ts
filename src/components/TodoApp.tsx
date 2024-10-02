import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {

    const [newTask, setNewTask] = useState<string>('')
    const [listaTarea, setlistaTarea] = useState<string[]>([])

    const handleAddTask = () => {
        if (newTask.trim() === '') return
        setlistaTarea(tareaAnteriores => [...tareaAnteriores, newTask])
        setNewTask('')
    }

    const handleBorrarTarea = (index: number) => {
        setlistaTarea(tareas => tareas.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div className='flex'>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Nueva Tarea" />
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas ListaTareas={listaTarea} borrarTarea={handleBorrarTarea} />
        </div>
    )
}