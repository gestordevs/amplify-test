/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProvider = /* GraphQL */ `
  mutation CreateProvider(
    $input: CreateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    createProvider(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProvider = /* GraphQL */ `
  mutation UpdateProvider(
    $input: UpdateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    updateProvider(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProvider = /* GraphQL */ `
  mutation DeleteProvider(
    $input: DeleteProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    deleteProvider(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUtilities = /* GraphQL */ `
  mutation CreateUtilities(
    $input: CreateUtilitiesInput!
    $condition: ModelUtilitiesConditionInput
  ) {
    createUtilities(input: $input, condition: $condition) {
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
export const updateUtilities = /* GraphQL */ `
  mutation UpdateUtilities(
    $input: UpdateUtilitiesInput!
    $condition: ModelUtilitiesConditionInput
  ) {
    updateUtilities(input: $input, condition: $condition) {
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
export const deleteUtilities = /* GraphQL */ `
  mutation DeleteUtilities(
    $input: DeleteUtilitiesInput!
    $condition: ModelUtilitiesConditionInput
  ) {
    deleteUtilities(input: $input, condition: $condition) {
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
export const createRental = /* GraphQL */ `
  mutation CreateRental(
    $input: CreateRentalInput!
    $condition: ModelRentalConditionInput
  ) {
    createRental(input: $input, condition: $condition) {
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
export const updateRental = /* GraphQL */ `
  mutation UpdateRental(
    $input: UpdateRentalInput!
    $condition: ModelRentalConditionInput
  ) {
    updateRental(input: $input, condition: $condition) {
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
export const deleteRental = /* GraphQL */ `
  mutation DeleteRental(
    $input: DeleteRentalInput!
    $condition: ModelRentalConditionInput
  ) {
    deleteRental(input: $input, condition: $condition) {
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
