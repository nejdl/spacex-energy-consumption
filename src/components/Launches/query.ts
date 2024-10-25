import { gql } from '@apollo/client';

// TO DO: remove unused fields
export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_name
        rocket_type
        rocket {
          height {
            meters
          }
          diameter {
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
