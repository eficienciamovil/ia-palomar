export function searchFilter<T>(items: T[], query: string, fields: (keyof T)[]): T[] {
  if (!query.trim()) return items;
  const lower = query.toLowerCase();
  return items.filter((item) =>
    fields.some((field) => {
      const value = item[field];
      if (typeof value === 'string') return value.toLowerCase().includes(lower);
      if (Array.isArray(value)) return value.some((v) => typeof v === 'string' && v.toLowerCase().includes(lower));
      return false;
    })
  );
}

export function filterByCategory<T extends { categoria?: string }>(items: T[], category: string): T[] {
  if (!category || category === 'todos') return items;
  return items.filter((item) => item.categoria === category);
}

export function filterByLevel<T extends { nivel?: string }>(items: T[], level: string): T[] {
  if (!level || level === 'todos') return items;
  return items.filter((item) => item.nivel === level);
}
