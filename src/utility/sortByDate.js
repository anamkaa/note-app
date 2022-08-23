export const sortByDate = (notes, byDate) => {
  if (byDate === "latest") {
    return [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (byDate === "oldest") {
    return [...notes].sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return notes;
};
