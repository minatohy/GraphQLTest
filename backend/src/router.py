#coding: utf-8

import strawberry
from strawberry.fastapi import GraphQLRouter
from resolvers import add_task, delete_task, get_task, get_tasks, update_task, test_task
from web.task.types import TaskType
from contexts import get_context
from typing import List


@strawberry.type
class Query:
    task: TaskType = strawberry.field(resolver=get_task)
    tasks: List[TaskType] = strawberry.field(resolver=get_tasks)
    task_test: str = strawberry.field(resolver=test_task)


@strawberry.type
class Mutation:
    task_add: TaskType = strawberry.field(resolver=add_task)
    task_update: TaskType = strawberry.field(resolver=update_task)
    task_delete: TaskType = strawberry.field(resolver=delete_task)


schema = strawberry.Schema(query=Query, mutation=Mutation)
task_app = GraphQLRouter(schema, context_getter=get_context)
