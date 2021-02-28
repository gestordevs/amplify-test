/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProvider = /* GraphQL */ `
  subscription OnCreateProvider($owner: String) {
    onCreateProvider(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProvider = /* GraphQL */ `
  subscription OnUpdateProvider($owner: String) {
    onUpdateProvider(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProvider = /* GraphQL */ `
  subscription OnDeleteProvider($owner: String) {
    onDeleteProvider(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUtilities = /* GraphQL */ `
  subscription OnCreateUtilities {
    onCreateUtilities {
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
export const onUpdateUtilities = /* GraphQL */ `
  subscription OnUpdateUtilities {
    onUpdateUtilities {
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
export const onDeleteUtilities = /* GraphQL */ `
  subscription OnDeleteUtilities {
    onDeleteUtilities {
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
export const onCreateRental = /* GraphQL */ `
  subscription OnCreateRental($owner: String) {
    onCreateRental(owner: $owner) {
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
export const onUpdateRental = /* GraphQL */ `
  subscription OnUpdateRental($owner: String) {
    onUpdateRental(owner: $owner) {
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
export const onDeleteRental = /* GraphQL */ `
  subscription OnDeleteRental($owner: String) {
    onDeleteRental(owner: $owner) {
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
