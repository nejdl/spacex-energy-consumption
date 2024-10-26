import { gql } from '@apollo/client';

// TO DO: remove unused fields
export const LAUNCHES = gql`
  query Launches($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
      id
      __typename
      mission_name
      launch_year
      rocket {
        rocket_name
        rocket {
          height {
            meters
          }
          mass {
            kg
          }
        }
      }
    }
  }
`;
