import { useMemo } from 'react';
import { useTasks } from '@/hooks/useTasks';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import { APP_TITLE } from '@/const';
import { BookOpen } from 'lucide-react';

/**
 * Página inicial da aplicação de lista de tarefas acadêmicas
 * Integra o formulário de cadastro e a lista de tarefas com filtros
 */
export default function Home() {
  const {
    tasks,
    isLoading,
    addTask,
    deleteTask,
    toggleTaskCompletion,
  } = useTasks();

  const pendingCount = useMemo(
    () => tasks.filter((t) => !t.completed).length,
    [tasks]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
              <BookOpen size={24} className="sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white truncate">
                {APP_TITLE}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                Organize suas tarefas acadêmicas com facilidade
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Coluna esquerda: Formulário */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 sm:top-24">
              <TaskForm onSubmit={addTask} isLoading={isLoading} />
            </div>
          </aside>

          {/* Coluna direita: Lista de Tarefas */}
          <section className="lg:col-span-2">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <>
                {/* Badge de tarefas pendentes */}
                {pendingCount > 0 && (
                  <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      Você tem <strong>{pendingCount}</strong> tarefa{pendingCount !== 1 ? 's' : ''} pendente{pendingCount !== 1 ? 's' : ''}
                    </p>
                  </div>
                )}
                <TaskList
                  tasks={tasks}
                  onToggleComplete={toggleTaskCompletion}
                  onDelete={deleteTask}
                />
              </>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 mt-8 sm:mt-12">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <p>
            © 2024 {APP_TITLE} • Desenvolvido com React, Tailwind CSS e boas práticas web
          </p>
        </div>
      </footer>
    </div>
  );
}
