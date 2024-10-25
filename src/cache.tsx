import { InMemoryCache, makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
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
