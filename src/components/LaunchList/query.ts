import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int, $offset: Int, $order: String, $sort: String) {
    launches(limit: $limit, offset: $offset, order: $order, sort: $sort) {
      id
      mission_name
      launch_date_utc
      launch_year
      launch_site {
        site_name
      }
      launch_success
      rocket {
        rocket_name
        rocket_type
        rocket {
          id
          name
          company
          country
          height {
            meters
          }
          mass {
            kg
          }
          cost_per_launch
          diameter {
            meters
          }
        }
      }
    }
  }
`;
