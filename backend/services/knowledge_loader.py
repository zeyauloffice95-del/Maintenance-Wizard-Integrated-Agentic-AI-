from pathlib import Path
from pypdf import PdfReader

# Repository root
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# /repository_root/knowledge
KNOWLEDGE_DIR = BASE_DIR / "knowledge"

def load_documents():

    docs = []

    print("KNOWLEDGE_DIR =", KNOWLEDGE_DIR)

    if not KNOWLEDGE_DIR.exists():
        print("Knowledge directory not found!")
        return docs

    pdf_files = list(KNOWLEDGE_DIR.rglob("*.pdf"))

    print(f"Found {len(pdf_files)} PDF files")

    for pdf_file in pdf_files:

        try:

            reader = PdfReader(str(pdf_file))

            text = ""

            for page in reader.pages:
                text += page.extract_text() or ""

            docs.append({
                "source": pdf_file.name,
                "content": text
            })

            print(f"Loaded: {pdf_file.name}")

        except Exception as e:

            print("ERROR:", pdf_file, e)

    print(f"Loaded {len(docs)} documents")

    return docs
