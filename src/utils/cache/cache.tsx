import { InMemoryCache, makeVar } from '@apollo/client';
import { Launch } from '../../../graphql';

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
