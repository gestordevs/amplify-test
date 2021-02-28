/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProviderInput = {
  id?: string | null,
  name: string,
};

export type ModelProviderConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProviderConditionInput | null > | null,
  or?: Array< ModelProviderConditionInput | null > | null,
  not?: ModelProviderConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Provider = {
  __typename: "Provider",
  id?: string,
  name?: string,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type UpdateProviderInput = {
  id: string,
  name?: string | null,
};

export type DeleteProviderInput = {
  id?: string | null,
};

export type CreateUtilitiesInput = {
  id?: string | null,
  name: string,
  photo?: string | null,
  utilitiesProviderId?: string | null,
};

export type ModelUtilitiesConditionInput = {
  name?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  and?: Array< ModelUtilitiesConditionInput | null > | null,
  or?: Array< ModelUtilitiesConditionInput | null > | null,
  not?: ModelUtilitiesConditionInput | null,
};

export type Utilities = {
  __typename: "Utilities",
  id?: string,
  name?: string,
  photo?: string | null,
  provider?: Provider,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUtilitiesInput = {
  id: string,
  name?: string | null,
  photo?: string | null,
  utilitiesProviderId?: string | null,
};

export type DeleteUtilitiesInput = {
  id?: string | null,
};

export type CreateRentalInput = {
  id?: string | null,
  from?: string | null,
  until?: string | null,
  rentalUtilityId?: string | null,
};

export type ModelRentalConditionInput = {
  from?: ModelStringInput | null,
  until?: ModelStringInput | null,
  and?: Array< ModelRentalConditionInput | null > | null,
  or?: Array< ModelRentalConditionInput | null > | null,
  not?: ModelRentalConditionInput | null,
};

export type Rental = {
  __typename: "Rental",
  id?: string,
  utility?: Utilities,
  from?: string | null,
  until?: string | null,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type UpdateRentalInput = {
  id: string,
  from?: string | null,
  until?: string | null,
  rentalUtilityId?: string | null,
};

export type DeleteRentalInput = {
  id?: string | null,
};

export type ModelProviderFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProviderFilterInput | null > | null,
  or?: Array< ModelProviderFilterInput | null > | null,
  not?: ModelProviderFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProviderConnection = {
  __typename: "ModelProviderConnection",
  items?:  Array<Provider | null > | null,
  nextToken?: string | null,
};

export type ModelUtilitiesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  and?: Array< ModelUtilitiesFilterInput | null > | null,
  or?: Array< ModelUtilitiesFilterInput | null > | null,
  not?: ModelUtilitiesFilterInput | null,
};

export type ModelUtilitiesConnection = {
  __typename: "ModelUtilitiesConnection",
  items?:  Array<Utilities | null > | null,
  nextToken?: string | null,
};

export type ModelRentalFilterInput = {
  id?: ModelIDInput | null,
  from?: ModelStringInput | null,
  until?: ModelStringInput | null,
  and?: Array< ModelRentalFilterInput | null > | null,
  or?: Array< ModelRentalFilterInput | null > | null,
  not?: ModelRentalFilterInput | null,
};

export type ModelRentalConnection = {
  __typename: "ModelRentalConnection",
  items?:  Array<Rental | null > | null,
  nextToken?: string | null,
};

export type SearchableUtilitiesFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  photo?: SearchableStringFilterInput | null,
  and?: Array< SearchableUtilitiesFilterInput | null > | null,
  or?: Array< SearchableUtilitiesFilterInput | null > | null,
  not?: SearchableUtilitiesFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableUtilitiesSortInput = {
  field?: SearchableUtilitiesSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUtilitiesSortableFields {
  id = "id",
  name = "name",
  photo = "photo",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableUtilitiesConnection = {
  __typename: "SearchableUtilitiesConnection",
  items?:  Array<Utilities | null > | null,
  nextToken?: string | null,
  total?: number | null,
};

export type CreateProviderMutationVariables = {
  input?: CreateProviderInput,
  condition?: ModelProviderConditionInput | null,
};

export type CreateProviderMutation = {
  createProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProviderMutationVariables = {
  input?: UpdateProviderInput,
  condition?: ModelProviderConditionInput | null,
};

export type UpdateProviderMutation = {
  updateProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProviderMutationVariables = {
  input?: DeleteProviderInput,
  condition?: ModelProviderConditionInput | null,
};

export type DeleteProviderMutation = {
  deleteProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUtilitiesMutationVariables = {
  input?: CreateUtilitiesInput,
  condition?: ModelUtilitiesConditionInput | null,
};

export type CreateUtilitiesMutation = {
  createUtilities?:  {
    __typename: "Utilities",
    id: string,
    name: string,
    photo?: string | null,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUtilitiesMutationVariables = {
  input?: UpdateUtilitiesInput,
  condition?: ModelUtilitiesConditionInput | null,
};

export type UpdateUtilitiesMutation = {
  updateUtilities?:  {
    __typename: "Utilities",
    id: string,
    name: string,
    photo?: string | null,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUtilitiesMutationVariables = {
  input?: DeleteUtilitiesInput,
  condition?: ModelUtilitiesConditionInput | null,
};

export type DeleteUtilitiesMutation = {
  deleteUtilities?:  {
    __typename: "Utilities",
    id: string,
    name: string,
    photo?: string | null,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRentalMutationVariables = {
  input?: CreateRentalInput,
  condition?: ModelRentalConditionInput | null,
};

export type CreateRentalMutation = {
  createRental?:  {
    __typename: "Rental",
    id: string,
    utility?:  {
      __typename: "Utilities",
      id: string,
      name: string,
      photo?: string | null,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    from?: string | null,
    until?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateRentalMutationVariables = {
  input?: UpdateRentalInput,
  condition?: ModelRentalConditionInput | null,
};

export type UpdateRentalMutation = {
  updateRental?:  {
    __typename: "Rental",
    id: string,
    utility?:  {
      __typename: "Utilities",
      id: string,
      name: string,
      photo?: string | null,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    from?: string | null,
    until?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteRentalMutationVariables = {
  input?: DeleteRentalInput,
  condition?: ModelRentalConditionInput | null,
};

export type DeleteRentalMutation = {
  deleteRental?:  {
    __typename: "Rental",
    id: string,
    utility?:  {
      __typename: "Utilities",
      id: string,
      name: string,
      photo?: string | null,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    from?: string | null,
    until?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetProviderQueryVariables = {
  id?: string,
};

export type GetProviderQuery = {
  getProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProvidersQueryVariables = {
  filter?: ModelProviderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProvidersQuery = {
  listProviders?:  {
    __typename: "ModelProviderConnection",
    items?:  Array< {
      __typename: "Provider",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUtilitiesQueryVariables = {
  id?: string,
};

export type GetUtilitiesQuery = {
  getUtilities?:  {
    __typename: "Utilities",
    id: string,
    name: string,
    photo?: string | null,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUtilitiessQueryVariables = {
  filter?: ModelUtilitiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUtilitiessQuery = {
  listUtilitiess?:  {
    __typename: "ModelUtilitiesConnection",
    items?:  Array< {
      __typename: "Utilities",
      id: string,
      name: string,
      photo?: string | null,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRentalQueryVariables = {
  id?: string,
};

export type GetRentalQuery = {
  getRental?:  {
    __typename: "Rental",
    id: string,
    utility?:  {
      __typename: "Utilities",
      id: string,
      name: string,
      photo?: string | null,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    from?: string | null,
    until?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListRentalsQueryVariables = {
  filter?: ModelRentalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRentalsQuery = {
  listRentals?:  {
    __typename: "ModelRentalConnection",
    items?:  Array< {
      __typename: "Rental",
      id: string,
      utility?:  {
        __typename: "Utilities",
        id: string,
        name: string,
        photo?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      from?: string | null,
      until?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SearchUtilitiessQueryVariables = {
  filter?: SearchableUtilitiesFilterInput | null,
  sort?: SearchableUtilitiesSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchUtilitiessQuery = {
  searchUtilitiess?:  {
    __typename: "SearchableUtilitiesConnection",
    items?:  Array< {
      __typename: "Utilities",
      id: string,
      name: string,
      photo?: string | null,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    total?: number | null,
  } | null,
};

export type OnCreateProviderSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateProviderSubscription = {
  onCreateProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProviderSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateProviderSubscription = {
  onUpdateProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProviderSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteProviderSubscription = {
  onDeleteProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUtilitiesSubscription = {
  onCreateUtilities?:  {
    __typename: "Utilities",
    id: string,
    name: string,
    photo?: string | null,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUtilitiesSubscription = {
  onUpdateUtilities?:  {
    __typename: "Utilities",
    id: string,
    name: string,
    photo?: string | null,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUtilitiesSubscription = {
  onDeleteUtilities?:  {
    __typename: "Utilities",
    id: string,
    name: string,
    photo?: string | null,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRentalSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateRentalSubscription = {
  onCreateRental?:  {
    __typename: "Rental",
    id: string,
    utility?:  {
      __typename: "Utilities",
      id: string,
      name: string,
      photo?: string | null,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    from?: string | null,
    until?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateRentalSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateRentalSubscription = {
  onUpdateRental?:  {
    __typename: "Rental",
    id: string,
    utility?:  {
      __typename: "Utilities",
      id: string,
      name: string,
      photo?: string | null,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    from?: string | null,
    until?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteRentalSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteRentalSubscription = {
  onDeleteRental?:  {
    __typename: "Rental",
    id: string,
    utility?:  {
      __typename: "Utilities",
      id: string,
      name: string,
      photo?: string | null,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    from?: string | null,
    until?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
