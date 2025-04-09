from fastapi import FastAPI
from app.routes import dataRouter
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title='Data-provider')

# CORS (optional but recommended for frontend integration)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include your router
app.include_router(dataRouter.router)

@app.get("/")
def root():
    return {"message": "Hello World"}
