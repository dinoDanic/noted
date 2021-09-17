export const basicAnimation = {
  initial: { scale: 0, y: 100, opacity: 0 },
  animate: { scale: 1, y: 0, opacity: 1 },
  exit: { opacity: 0 },
};

export const popButtom = {
  initial: { y: 200 },
  animate: { y: 0 },
  exit: { y: 200, opacity: "" },
};

export const noteEnter = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { delay: 0.2 } },
  exit: {},
};
