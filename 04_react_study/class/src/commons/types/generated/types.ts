export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Board = {
  __typename?: 'Board';
  contents: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  writer: Scalars['String']['output'];
};

export type BoardCreateRequestDto = {
  contents: Scalars['String']['input'];
  title: Scalars['String']['input'];
  writer: Scalars['String']['input'];
};

export type BoardCreateResponseDto = {
  __typename?: 'BoardCreateResponseDto';
  contents: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  writer: Scalars['String']['output'];
};

export type BoardUpdateRequestDto = {
  contents?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BoardUpdateResponseDto = {
  __typename?: 'BoardUpdateResponseDto';
  contents: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  writer: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard?: Maybe<BoardCreateResponseDto>;
  deleteBoard?: Maybe<Scalars['String']['output']>;
  updateBoard?: Maybe<BoardUpdateResponseDto>;
};


export type MutationCreateBoardArgs = {
  request?: InputMaybe<BoardCreateRequestDto>;
};


export type MutationDeleteBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type MutationUpdateBoardArgs = {
  request?: InputMaybe<BoardUpdateRequestDto>;
};

export type Query = {
  __typename?: 'Query';
  getBoard?: Maybe<Board>;
  getBoards?: Maybe<Array<Maybe<Board>>>;
};


export type QueryGetBoardArgs = {
  boardId: Scalars['ID']['input'];
};
