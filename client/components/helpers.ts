export const scrollIntoView = (ref) => {
  if (ref !== null) {
    ref.scrollIntoView({ behavior: "smooth" });
  }
};
