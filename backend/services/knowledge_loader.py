from pathlib import Path
from pypdf import PdfReader


KNOWLEDGE_DIR = Path(__file__).resolve().parent.parent / "knowledge"

print("Knowledge directory:", KNOWLEDGE_DIR)

def load_documents():

    docs = []

    print("Knowledge folder:", KNOWLEDGE_DIR)

    for pdf_file in KNOWLEDGE_DIR.rglob("*.pdf"):

        try:

            print("Loading:", pdf_file)

            reader = PdfReader(str(pdf_file))

            text = ""

            for page in reader.pages:
                text += page.extract_text() or ""

            docs.append({
                "source": pdf_file.name,
                "content": text
            })

        except Exception as e:

            print("ERROR:", pdf_file, e)

    print("Loaded docs:", len(docs))

    return docs
