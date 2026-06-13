from services.knowledge_loader import load_documents

docs = load_documents()

STOPWORDS = {
    "the",
    "a",
    "an",
    "how",
    "what",
    "why",
    "when",
    "can",
    "could",
    "should",
    "is",
    "are",
    "of",
    "to",
    "for",
    "in",
    "on"
}


def get_context(query):

    query_words = [
        w.lower()
        for w in query.split()
        if w.lower() not in STOPWORDS
    ]

    scored_docs = []

    for doc in docs:

        content = doc["content"].lower()

        score = sum(
            1 for word in query_words
            if word in content
        )

        if score > 0:

            scored_docs.append(
                (score, doc)
            )

    scored_docs.sort(
        reverse=True,
        key=lambda x: x[0]
    )

    context = ""

    for score, doc in scored_docs[:3]:

        context += f"""

SOURCE:
{doc['source']}

CONTENT:
{doc['content'][:2000]}

"""

    return context
