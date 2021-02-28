/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProvider = /* GraphQL */ `
  query GetProvider($id: ID!) {
    getProvider(id: $id) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProviders = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUtilities = /* GraphQL */ `
  query GetUtilities($id: ID!) {
    getUtilities(id: $id) {
      id
      name
      photo
      provider {
        id
        name
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUtilitiess = /* GraphQL */ `
  query ListUtilitiess(
    $filter: ModelUtilitiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUtilitiess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        photo
        provider {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRental = /* GraphQL */ `
  query GetRental($id: ID!) {
    getRental(id: $id) {
      id
      utility {
        id
        name
        photo
        provider {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      from
      until
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listRentals = /* GraphQL */ `
  query ListRentals(
    $filter: ModelRentalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRentals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        utility {
          id
          name
          photo
          createdAt
          updatedAt
        }
        from
        until
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const searchUtilitiess = /* GraphQL */ `
  query SearchUtilitiess(
    $filter: SearchableUtilitiesFilterInput
    $sort: SearchableUtilitiesSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchUtilitiess(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        photo
        provider {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
