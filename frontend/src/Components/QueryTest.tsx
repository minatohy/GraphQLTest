import { GraphQLClient } from "graphql-request";
import { UseQueryResult } from "@tanstack/react-query";
import { useGetTasksQuery, Task, GetTasksQuery, GetTasksQueryVariables } from "../generated/generated";

interface Props {
    //
}

export const useGetTasks = (variables?: GetTasksQueryVariables) : UseQueryResult<GetTasksQuery, unknown> => {
    const endpoint = "http://localhost:4000/task";
    const graphqlClient = new GraphQLClient(endpoint);
    // const queryClient = useQueryClient();
    // const result = useQuery<Array<Task>>("tasks", () => new useGetTasksQuery().getTasks());
    const tasks = useGetTasksQuery(
        graphqlClient,
        variables,
        {
            refetchOnWindowFocus: false,
            onError: (e) =>{
                console.log('error: ', e)
            },
            useErrorBoundary: (error: any) => error.response?.status >= 500,
        }
    )
    return tasks;
};

export const QueryTest = () => {
    const { data, isError, isSuccess, isLoading } = useGetTasks();
    console.log("data:",data);
    return (
        <>
        {data?.tasks.map((item:any) => (
            <div key={item.id}>{item.title}</div>
        ))}
        </>
    );
}