import { Tarea } from "./Tarea"

type Props = {
  ListaTareas: string[]
  borrarTarea: (index: number) => void
}

export const ListaTareas = ({ ListaTareas, borrarTarea }: Props) => {
  return (
    <div className="taskList">
      {ListaTareas.map((tarea, index) => (
        <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)} />
      )
      )}
    </div>
  )
}