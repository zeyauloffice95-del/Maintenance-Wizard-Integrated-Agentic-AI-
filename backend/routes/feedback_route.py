from fastapi import APIRouter
import json
import os

router = APIRouter()

FEEDBACK_FILE = "feedback/feedback.json"


@router.post("/submit")
def submit_feedback(data: dict):

    if not os.path.exists(FEEDBACK_FILE):

        os.makedirs("feedback", exist_ok=True)

        with open(FEEDBACK_FILE, "w") as f:
            json.dump([], f)

    with open(FEEDBACK_FILE, "r") as f:

        feedbacks = json.load(f)

    feedbacks.append(data)

    with open(FEEDBACK_FILE, "w") as f:

        json.dump(
            feedbacks,
            f,
            indent=4
        )

    return {
        "status": "saved"
    }
