export const filterBySearch = (notes, bySearch) => {
  if (bySearch) {
    return [...notes].filter((item) => {
      return (
        item.title.toLowerCase().includes(bySearch) ||
        item.body.toLowerCase().includes(bySearch) ||
        item.label.toLowerCase().includes(bySearch)
      );
    });
  }
  return notes;
};
