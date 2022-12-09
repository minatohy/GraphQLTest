import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    // variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AddTaskInput = {
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  taskAdd: Task;
  taskDelete: Task;
  taskUpdate: Task;
};


export type MutationTaskAddArgs = {
  taskInput: AddTaskInput;
};


export type MutationTaskDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTaskUpdateArgs = {
  taskInput: UpdateTaskInput;
};

export type Query = {
  __typename?: 'Query';
  task: Task;
  taskTest: Scalars['String'];
  tasks: Array<Task>;
};


export type QueryTaskArgs = {
  id: Scalars['ID'];
};

export enum Status {
  Doing = 'DOING',
  Done = 'DONE',
  Todo = 'TODO'
}

export type Task = {
  __typename?: 'Task';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  status: Status;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UpdateTaskInput = {
  id: Scalars['ID'];
  status: Scalars['String'];
};

export type TaskPartsFragment = { __typename?: 'Task', id: string, title: string, description?: string | null, status: Status, updatedAt: any };

export type GetTaskQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTaskQuery = { __typename?: 'Query', task: { __typename?: 'Task', id: string, title: string, description?: string | null, status: Status, updatedAt: any } };

export type GetTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, title: string, description?: string | null, status: Status, updatedAt: any }> };

export type TestTaskQueryVariables = Exact<{ [key: string]: never; }>;


export type TestTaskQuery = { __typename?: 'Query', taskTest: string };

export type AddTaskMutationVariables = Exact<{
  taskInput: AddTaskInput;
}>;


export type AddTaskMutation = { __typename?: 'Mutation', taskAdd: { __typename?: 'Task', id: string, title: string, description?: string | null, status: Status, updatedAt: any } };

export type UpdateTaskMutationVariables = Exact<{
  taskInput: UpdateTaskInput;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', taskUpdate: { __typename?: 'Task', id: string, title: string, description?: string | null, status: Status, updatedAt: any } };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', taskDelete: { __typename?: 'Task', id: string, title: string, description?: string | null, status: Status, updatedAt: any } };

export const TaskPartsFragmentDoc = `
    fragment TaskParts on Task {
  id
  title
  description
  status
  updatedAt
}
    `;
export const GetTaskDocument = `
    query getTask($id: ID!) {
  task(id: $id) {
    ...TaskParts
  }
}
    ${TaskPartsFragmentDoc}`;
export const useGetTaskQuery = <
      TData = GetTaskQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetTaskQueryVariables,
      options?: UseQueryOptions<GetTaskQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTaskQuery, TError, TData>(
      ['getTask', variables],
      fetcher<GetTaskQuery, GetTaskQueryVariables>(client, GetTaskDocument, variables, headers),
      options
    );

useGetTaskQuery.getKey = (variables: GetTaskQueryVariables) => ['getTask', variables];
;

export const GetTasksDocument = `
    query getTasks {
  tasks {
    ...TaskParts
  }
}
    ${TaskPartsFragmentDoc}`;
export const useGetTasksQuery = <
      TData = GetTasksQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetTasksQueryVariables,
      options?: UseQueryOptions<GetTasksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTasksQuery, TError, TData>(
      variables === undefined ? ['getTasks'] : ['getTasks', variables],
      fetcher<GetTasksQuery, GetTasksQueryVariables>(client, GetTasksDocument, variables, headers),
      options
    );

useGetTasksQuery.getKey = (variables?: GetTasksQueryVariables) => variables === undefined ? ['getTasks'] : ['getTasks', variables];
;

export const TestTaskDocument = `
    query testTask {
  taskTest
}
    `;
export const useTestTaskQuery = <
      TData = TestTaskQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: TestTaskQueryVariables,
      options?: UseQueryOptions<TestTaskQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<TestTaskQuery, TError, TData>(
      variables === undefined ? ['testTask'] : ['testTask', variables],
      fetcher<TestTaskQuery, TestTaskQueryVariables>(client, TestTaskDocument, variables, headers),
      options
    );

useTestTaskQuery.getKey = (variables?: TestTaskQueryVariables) => variables === undefined ? ['testTask'] : ['testTask', variables];
;

export const AddTaskDocument = `
    mutation addTask($taskInput: AddTaskInput!) {
  taskAdd(taskInput: $taskInput) {
    ...TaskParts
  }
}
    ${TaskPartsFragmentDoc}`;
export const useAddTaskMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddTaskMutation, TError, AddTaskMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddTaskMutation, TError, AddTaskMutationVariables, TContext>(
      ['addTask'],
      (variables?: AddTaskMutationVariables) => fetcher<AddTaskMutation, AddTaskMutationVariables>(client, AddTaskDocument, variables, headers)(),
      options
    );
export const UpdateTaskDocument = `
    mutation updateTask($taskInput: UpdateTaskInput!) {
  taskUpdate(taskInput: $taskInput) {
    ...TaskParts
  }
}
    ${TaskPartsFragmentDoc}`;
export const useUpdateTaskMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateTaskMutation, TError, UpdateTaskMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateTaskMutation, TError, UpdateTaskMutationVariables, TContext>(
      ['updateTask'],
      (variables?: UpdateTaskMutationVariables) => fetcher<UpdateTaskMutation, UpdateTaskMutationVariables>(client, UpdateTaskDocument, variables, headers)(),
      options
    );
export const DeleteTaskDocument = `
    mutation deleteTask($id: ID!) {
  taskDelete(id: $id) {
    ...TaskParts
  }
}
    ${TaskPartsFragmentDoc}`;
export const useDeleteTaskMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteTaskMutation, TError, DeleteTaskMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteTaskMutation, TError, DeleteTaskMutationVariables, TContext>(
      ['deleteTask'],
      (variables?: DeleteTaskMutationVariables) => fetcher<DeleteTaskMutation, DeleteTaskMutationVariables>(client, DeleteTaskDocument, variables, headers)(),
      options
    );