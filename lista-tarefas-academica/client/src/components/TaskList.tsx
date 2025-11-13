import { useMemo, useState } from 'react';
import { Task } from '@/hooks/useTasks';
import TaskItem from './TaskItem';
import { sortTasksByDate } from '@/lib/dateUtils';
import { Filter, ListTodo } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

type FilterStatus = 'all' | 'pending' | 'completed';

export default function TaskList({
  tasks,
  onToggleComplete,
  onDelete,
}: TaskListProps) {
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');

  // Extrair disciplinas únicas
  const disciplines = useMemo(() => {
    const unique = new Set(tasks.map((t) => t.discipline));
    return Array.from(unique).sort();
  }, [tasks]);

  // Filtrar e ordenar tarefas
  const filteredTasks = useMemo(() => {
    let filtered = tasks;

    // Filtrar por status
    if (filterStatus === 'pending') {
      filtered = filtered.filter((t) => !t.completed);
    } else if (filterStatus === 'completed') {
      filtered = filtered.filter((t) => t.completed);
    }

    // Filtrar por disciplina
    if (selectedDiscipline !== 'all') {
      filtered = filtered.filter((t) => t.discipline === selectedDiscipline);
    }

    // Ordenar por data de entrega
    return sortTasksByDate(filtered);
  }, [tasks, filterStatus, selectedDiscipline]);

  // Contar tarefas por status
  const stats = useMemo(() => {
    return {
      total: tasks.length,
      pending: tasks.filter((t) => !t.completed).length,
      completed: tasks.filter((t) => t.completed).length,
    };
  }, [tasks]);

  return (
    <section className="w-full" aria-label="Lista de tarefas">
      {/* Cabeçalho com Estatísticas */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <ListTodo size={20} className="sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Minhas Tarefas
          </h2>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 sm:p-3 border border-blue-200 dark:border-blue-800">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total</p>
            <p className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
              {stats.total}
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-2 sm:p-3 border border-yellow-200 dark:border-yellow-800">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Pendentes</p>
            <p className="text-xl sm:text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              {stats.pending}
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 sm:p-3 border border-green-200 dark:border-green-800">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Concluídas</p>
            <p className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
              {stats.completed}
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Filter size={16} className="sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              Filtrar:
            </span>
          </div>

          {/* Filtro de Status */}
          <div className="flex gap-1 sm:gap-2 flex-wrap">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                filterStatus === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600'
              }`}
              aria-pressed={filterStatus === 'all'}
            >
              Todas
            </button>
            <button
              onClick={() => setFilterStatus('pending')}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                filterStatus === 'pending'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600'
              }`}
              aria-pressed={filterStatus === 'pending'}
            >
              Pendentes
            </button>
            <button
              onClick={() => setFilterStatus('completed')}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                filterStatus === 'completed'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600'
              }`}
              aria-pressed={filterStatus === 'completed'}
            >
              Concluídas
            </button>
          </div>
        </div>

        {/* Filtro de Disciplina */}
        {disciplines.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <label htmlFor="discipline-filter" className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              Disciplina:
            </label>
            <select
              id="discipline-filter"
              value={selectedDiscipline}
              onChange={(e) => setSelectedDiscipline(e.target.value)}
              className="px-2 sm:px-3 py-1 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Todas as disciplinas</option>
              {disciplines.map((discipline) => (
                <option key={discipline} value={discipline}>
                  {discipline}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Lista de Tarefas */}
      {filteredTasks.length > 0 ? (
        <div className="space-y-2 sm:space-y-3">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 sm:py-12 bg-gray-50 dark:bg-slate-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-slate-600">
          <ListTodo
            size={36}
            className="sm:w-12 sm:h-12 mx-auto text-gray-400 dark:text-gray-600 mb-3"
          />
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
            {tasks.length === 0
              ? 'Nenhuma tarefa cadastrada ainda'
              : 'Nenhuma tarefa corresponde aos filtros selecionados'}
          </p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1">
            {tasks.length === 0
              ? 'Adicione uma nova tarefa para começar'
              : 'Tente alterar os filtros'}
          </p>
        </div>
      )}
    </section>
  );
}
