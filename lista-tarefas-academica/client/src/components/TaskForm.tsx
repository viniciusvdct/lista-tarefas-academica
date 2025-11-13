import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

interface TaskFormProps {
  onSubmit: (title: string, discipline: string, dueDate: string) => void;
  isLoading?: boolean;
}

export default function TaskForm({ onSubmit, isLoading = false }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validação
    if (!title.trim()) {
      setError('Por favor, insira o título da tarefa');
      return;
    }
    if (!discipline.trim()) {
      setError('Por favor, selecione uma disciplina');
      return;
    }
    if (!dueDate) {
      setError('Por favor, selecione uma data de entrega');
      return;
    }

    // Validar se a data não é no passado
    const selectedDate = new Date(dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      setError('A data de entrega não pode ser no passado');
      return;
    }

    onSubmit(title.trim(), discipline.trim(), dueDate);

    // Limpar formulário
    setTitle('');
    setDiscipline('');
    setDueDate('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white dark:bg-slate-900 rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 dark:border-slate-700"
      aria-label="Formulário para adicionar nova tarefa"
    >
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Adicionar Nova Tarefa
      </h2>

      {error && (
        <div
          className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md text-xs sm:text-sm"
          role="alert"
          aria-live="polite"
        >
          {error}
        </div>
      )}

      <div className="space-y-4">
        {/* Campo de Título */}
        <div>
          <label htmlFor="task-title" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Título da Tarefa *
          </label>
          <Input
            id="task-title"
            type="text"
            placeholder="Ex: Fazer trabalho de Cálculo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isLoading}
            maxLength={100}
            className="w-full"
            aria-required="true"
          />
        </div>

        {/* Campo de Disciplina */}
        <div>
          <label htmlFor="task-discipline" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Disciplina *
          </label>
          <select
            id="task-discipline"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            aria-required="true"
          >
            <option value="">Selecione uma disciplina</option>
            <option value="Cálculo">Cálculo</option>
            <option value="Programação">Programação</option>
            <option value="Banco de Dados">Banco de Dados</option>
            <option value="Estrutura de Dados">Estrutura de Dados</option>
            <option value="Engenharia de Software">Engenharia de Software</option>
            <option value="Redes de Computadores">Redes de Computadores</option>
            <option value="Sistemas Operacionais">Sistemas Operacionais</option>
            <option value="Outra">Outra</option>
          </select>
        </div>

        {/* Campo de Data */}
        <div>
          <label htmlFor="task-date" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Data de Entrega *
          </label>
          <Input
            id="task-date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            disabled={isLoading}
            className="w-full"
            aria-required="true"
          />
        </div>

        {/* Botão de Envio */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 sm:py-3 rounded-md flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
          aria-label="Adicionar tarefa"
        >
          <Plus size={18} className="sm:w-5 sm:h-5" />
          <span>Adicionar Tarefa</span>
        </Button>
      </div>
    </form>
  );
}
