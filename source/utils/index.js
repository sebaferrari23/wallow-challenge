export const secondsToTime = (time) => {
  const m = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');

  return `${m}:${s}`;
};

export const checkIsCompleted = (partialValue, totalValue) => {
  const percentage = (100 * partialValue) / totalValue;
  const isCompleted = percentage >= 90;
  return isCompleted;
};
