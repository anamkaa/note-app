export const PRIORITY = {
  low: "LOW",
  medium: "MEDIUM",
  high: "HIGH",
};

export const filterByPriority = (notes, byPriority) => {
  if (byPriority === "Low") {
    return [...notes].filter((item) => item.priority === "Low");
  } else if (byPriority === "Medium") {
    return [...notes].filter((item) => item.priority === "Medium");
  } else if (byPriority === "High") {
    return [...notes].filter((item) => item.priority === "High");
  }

  return notes;
};
