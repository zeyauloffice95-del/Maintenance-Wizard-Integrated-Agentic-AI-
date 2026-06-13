from pathlib import Path
from pypdf import PdfReader

KNOWLEDGE_DIR = "../knowledge"

def load_documents():

    docs = []

    for pdf_file in Path(KNOWLEDGE_DIR).rglob("*.pdf"):

        try:

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

    return docs
