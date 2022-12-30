/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GuestbookEntry = {
  __typename?: 'GuestbookEntry';
  createdAt: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  entries?: Maybe<Array<GuestbookEntry>>;
};

export type GetEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntriesQuery = { __typename?: 'Query', entries?: Array<{ __typename?: 'GuestbookEntry', name: string, message: string }> | null };


export const GetEntriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<GetEntriesQuery, GetEntriesQueryVariables>;