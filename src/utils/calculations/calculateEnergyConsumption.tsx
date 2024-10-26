export const calculateEnergyConsumption = (massKg: number) => {
  const fuelMass = massKg * 15;
  const energeticValuePerKgFuel = 1.35e7; // 1.35 * 10^7 Joules / kg
  const totalEnergeticValue = fuelMass * energeticValuePerKgFuel;
  return totalEnergeticValue;
};
