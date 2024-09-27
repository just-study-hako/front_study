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

export type IBoard = {
  __typename?: 'Board';
  contents: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  writer: Scalars['String']['output'];
};

export type IBoardCreateRequestDto = {
  contents: Scalars['String']['input'];
  title: Scalars['String']['input'];
  writer: Scalars['String']['input'];
};

export type IBoardCreateResponseDto = {
  __typename?: 'BoardCreateResponseDto';
  contents: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  writer: Scalars['String']['output'];
};

export type IBoardUpdateRequestDto = {
  contents?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type IBoardUpdateResponseDto = {
  __typename?: 'BoardUpdateResponseDto';
  contents: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  writer: Scalars['String']['output'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createBoard?: Maybe<IBoardCreateResponseDto>;
  deleteBoard?: Maybe<Scalars['String']['output']>;
  updateBoard?: Maybe<IBoardUpdateResponseDto>;
};


export type IMutationCreateBoardArgs = {
  request?: InputMaybe<IBoardCreateRequestDto>;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type IMutationUpdateBoardArgs = {
  request?: InputMaybe<IBoardUpdateRequestDto>;
};

export type IQuery = {
  __typename?: 'Query';
  getBoard?: Maybe<IBoard>;
  getBoards?: Maybe<Array<Maybe<IBoard>>>;
  getBoardsCount?: Maybe<Scalars['String']['output']>;
};


export type IQueryGetBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type IQueryGetBoardsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};
