import { Task } from '@/hooks/useTasks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, Trash2, Calendar, BookOpen } from 'lucide-react';
import { formatDate, isOverdue } from '@/lib/dateUtils';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({
  task,
  onToggleComplete,
  onDelete,
}: TaskItemProps) {
  const overdue = isOverdue(task.dueDate) && !task.completed;
  const formattedDate = formatDate(task.dueDate);

  return (
    <article
      className={`
        w-full p-3 sm:p-4 rounded-lg border transition-all
        ${
          task.completed
            ? 'bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700'
            : overdue
              ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
              : 'bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700'
        }
        hover:shadow-md
      `}
      aria-label={`Tarefa: ${task.title}`}
    >
      <div className="flex items-start gap-2 sm:gap-3">
        {/* Botão de Conclusão */}
        <button
          onClick={() => onToggleComplete(task.id)}
          className="mt-1 flex-shrink-0 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label={task.completed ? 'Marcar como pendente' : 'Marcar como concluída'}
          aria-pressed={task.completed}
        >
          {task.completed ? (
            <CheckCircle2 size={20} className="sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
          ) : (
            <Circle size={20} className="sm:w-6 sm:h-6" />
          )}
        </button>

        {/* Conteúdo da Tarefa */}
        <div className="flex-1 min-w-0">
          <h3
            className={`
              text-sm sm:text-base font-semibold break-words
              ${
                task.completed
                  ? 'text-gray-500 dark:text-gray-400 line-through'
                  : 'text-gray-900 dark:text-white'
              }
            `}
          >
            {task.title}
          </h3>

          {/* Metadados da Tarefa */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            {/* Disciplina */}
            <div className="flex items-center gap-1">
              <BookOpen size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
              <span>{task.discipline}</span>
            </div>

            {/* Data de Entrega */}
            <div
              className={`flex items-center gap-1 ${
                overdue ? 'text-red-600 dark:text-red-400 font-medium' : ''
              }`}
            >
              <Calendar size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
              <span>
                {formattedDate}
                {overdue && ' (Atrasada)'}
              </span>
            </div>
          </div>
        </div>

        {/* Botão de Deletar */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(task.id)}
          className="flex-shrink-0 text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 p-1 sm:p-2"
          aria-label="Deletar tarefa"
        >
          <Trash2 size={18} className="sm:w-5 sm:h-5" />
        </Button>
      </div>
    </article>
  );
}
