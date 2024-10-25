import { InMemoryCache, makeVar } from '@apollo/client';
import { Launch } from '../../../graphql';
import { calculateEnergyConsumption } from '../calculations/calculateEnergyConsumption';

export const cache = new InMemoryCache({
  typePolicies: {
    Rocket: {
      fields: {
        energy: {
          read(_, { readField }) {
            const mass = readField('mass.kg') as number;
            return calculateEnergyConsumption(mass);
          },
        },
      },
    },
    Query: {
      fields: {
        selectedLaunches: {
          read() {
            return selectedLaunchesVar();
          },
        },
        selectedLaunchIds: {
          read() {
            return selectedLaunchIdsVar();
          },
        },
      },
    },
  },
});

export const selectedLaunchIdsVar = makeVar<string[]>([]);
export const selectedLaunchesVar = makeVar<Launch[]>([]);
