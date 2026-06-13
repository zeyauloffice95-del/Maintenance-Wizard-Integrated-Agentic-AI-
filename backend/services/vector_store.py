import faiss
import numpy as np

from sentence_transformers import SentenceTransformer

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

documents = []
index = None


def build_vector_store(docs):

    global documents
    global index

    documents = docs

    vectors = model.encode(
        [d["content"] for d in docs]
    )

    dimension = vectors.shape[1]

    index = faiss.IndexFlatL2(
        dimension
    )

    index.add(
        np.array(vectors).astype("float32")
    )


def search_knowledge(
        query,
        top_k=3):

    if index is None:
        return []

    query_vector = model.encode(
        [query]
    )

    distances, indices = index.search(
        np.array(query_vector).astype("float32"),
        top_k
    )

    results = []

    for idx in indices[0]:

        if idx < len(documents):

            results.append(
                documents[idx]
            )

    return results
