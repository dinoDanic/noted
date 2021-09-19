export const basicAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const popButtom = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: {
    scale: [1, 0.8, 0.6],
    opacity: [1, 0, 0],
    transition: { duration: 0.3 },
  },
};

export const noteEnter = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.2 },
  },
  exit: {},
};
