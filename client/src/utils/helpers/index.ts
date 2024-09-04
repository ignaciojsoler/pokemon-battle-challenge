export const convertToPercentage = ({
  value,
  min = 1,
  max = 6,
}: {
  value: number;
  min?: number;
  max?: number;
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return percentage;
};
