export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const pad = (n: number) => String(n).padStart(2, '0');

  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}. - ${pad(date.getHours())}:${pad(date.getMinutes())}`;
};
