/**
 * Formata uma data no formato YYYY-MM-DD para o formato brasileiro DD/MM/YYYY
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  } catch {
    return dateString;
  }
}

/**
 * Verifica se uma data está atrasada (no passado)
 */
export function isOverdue(dateString: string): boolean {
  try {
    const dueDate = new Date(dateString + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dueDate < today;
  } catch {
    return false;
  }
}

/**
 * Calcula a diferença em dias entre hoje e uma data
 */
export function daysUntilDue(dateString: string): number {
  try {
    const dueDate = new Date(dateString + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = dueDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  } catch {
    return 0;
  }
}

/**
 * Ordena tarefas por data de entrega
 */
export function sortTasksByDate<T extends { dueDate: string }>(
  tasks: T[],
  ascending = true
): T[] {
  return [...tasks].sort((a, b) => {
    const dateA = new Date(a.dueDate).getTime();
    const dateB = new Date(b.dueDate).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}
