export const wait = async (timeInMs: number) => {
  await new Promise((resolve) => setTimeout(resolve, timeInMs));
};
