import { format, parseISO } from 'date-fns';

export const formatDate = (date: string, type = 'MMMM dd, yyyy') => {
  if (!date) return '';
  return format(parseISO(date), type);
};

export const calculateReadingTime = (content: string, wordsPerMinute = 200) => {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};
