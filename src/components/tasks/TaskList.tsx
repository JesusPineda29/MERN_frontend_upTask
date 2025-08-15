import type { Task } from "@/types/index"
import { TaskCard } from "./TaskCard"
import { statusTranslations } from "@/locales/es"

type TaskListProps = {
  tasks: Task[]
}

type GroupedTasks = {
  [key: string]: Task[]
}

const initialStatusGroups: GroupedTasks = {
  pending: [],
  inProgress: [],
  onHold: [],
  underReview: [],
  completed: []
}

const statusStyles: { [key: string]: string } = {
  pending: 'border-t-slate-500',
  inProgress: 'border-t-blue-500',
  onHold: 'border-t-red-500',
  underReview: 'border-t-amber-500',
  completed: 'border-t-emerald-500'
}

export const TaskList = ({ tasks }: TaskListProps) => {
  const groupedTasks = tasks.reduce((acc, task) => {
    let currentGroup = acc[task.status] ? [...acc[task.status]] : [];
    currentGroup = [...currentGroup, task]
    return { ...acc, [task.status]: currentGroup };
  }, initialStatusGroups);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black my-6 lg:my-10 text-center lg:text-left">
        Tareas
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 pb-8">
        {Object.entries(groupedTasks).map(([status, tasks]) => (
          <div key={status} className="flex flex-col">
            <div
              className={`
                rounded-t-lg border border-slate-200 bg-gradient-to-r from-white to-slate-50 
                p-4 border-t-4 shadow-sm hover:shadow-md transition-shadow duration-200
                ${statusStyles[status]}
              `}
            >
              <h3 className="capitalize text-lg font-semibold text-slate-700 text-center">
                {statusTranslations[status]}
              </h3>
            </div>
            
            <div className="bg-slate-50 rounded-b-lg border border-t-0 border-slate-200 min-h-[200px] p-3">
              <ul className="space-y-3">
                {tasks.length === 0 ? (
                  <li className="text-slate-400 text-center pt-8 text-sm italic">
                    No hay tareas
                  </li>
                ) : (
                  tasks.map(task => (
                    <li key={task._id} className="transform hover:scale-[1.02] transition-transform duration-150">
                      <TaskCard task={task} />
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}