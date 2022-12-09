#coding: utf-8

from fastapi import FastAPI
from router import task_app
import uvicorn
from database import database_context
from fastapi.middleware.cors import CORSMiddleware

api = FastAPI()

origins = [
    "http://localhost:3000",
]

def register_controller():
    api.include_router(task_app, prefix="/task")
    api.add_middleware(CORSMiddleware, allow_origins=origins,allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

if __name__ == "__main__":
    database_context.initialize()
    register_controller()
    uvicorn.run(app=api, host="0.0.0.0", port=4000)
