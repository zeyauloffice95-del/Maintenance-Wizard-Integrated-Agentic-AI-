import os
import json
import google.generativeai as genai

from dotenv import load_dotenv

load_dotenv()

API_KEYS = [

    os.getenv("GEMINI_API_KEY_1"),

    os.getenv("GEMINI_API_KEY_2"),

    os.getenv("GEMINI_API_KEY_3")

]

MODEL_NAME = "gemini-2.5-flash"


def try_gemini(prompt, api_key):

    genai.configure(
        api_key=api_key
    )

    model = genai.GenerativeModel(
        MODEL_NAME
    )

    response = model.generate_content(
        prompt
    )

    return response.text


def ask_gemini_json(prompt):

    last_error = None

    for idx, key in enumerate(API_KEYS):

        if not key:
            continue

        try:

            print(
                f"\nUsing Gemini Key {idx+1}"
            )

            text = try_gemini(
                prompt,
                key
            )

            text = text.replace(
                "```json",
                ""
            )

            text = text.replace(
                "```",
                ""
            )

            text = text.strip()

            return json.loads(
                text
            )

        except Exception as e:

            print(
                f"Gemini Key {idx+1} Failed"
            )

            print(str(e))

            last_error = e

    raise Exception(
        f"All Gemini Keys Failed: {last_error}"
    )


def ask_gemini_text(prompt):

    last_error = None

    for idx, key in enumerate(API_KEYS):

        if not key:
            continue

        try:

            print(
                f"\nUsing Gemini Key {idx+1}"
            )

            return try_gemini(
                prompt,
                key
            )

        except Exception as e:

            print(
                f"Gemini Key {idx+1} Failed"
            )

            print(str(e))

            last_error = e

    raise Exception(
        f"All Gemini Keys Failed: {last_error}"
    )
