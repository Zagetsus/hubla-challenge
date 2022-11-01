export const capitalizeWords = (text: string) => {
  const words = text.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }

  return words.join(' ');
};
