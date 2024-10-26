import { gql } from '@apollo/client';

export const LAUNCHES = gql`
  query Launches($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_year
      rocket {
        rocket_name
        rocket {
          mass {
            kg
          }
        }
      }
    }
  }
`;
