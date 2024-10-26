import { InMemoryCache, makeVar } from '@apollo/client';
import { Launch } from '../../generated/graphql';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        selectedLaunches: {
          read() {
            return selectedLaunchesVar();
          },
        },
      },
    },
  },
});

export const selectedLaunchesVar = makeVar<Launch[]>([]);
