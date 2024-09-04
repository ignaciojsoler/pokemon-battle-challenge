export const convertToPercentage = ({
  value,
  min = 1,
  max = 6,
}: {
  value: number;
  min?: number;
  max?: number;
}) => {
  if (value < min) return 0;
  if (value > max) return 100;
  const percentage = ((value - min) / (max - min)) * 100;

  return percentage;
};
