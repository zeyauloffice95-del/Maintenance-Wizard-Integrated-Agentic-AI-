from fastapi import APIRouter
from fastapi.responses import FileResponse
from pathlib import Path

router = APIRouter()

REPORTS_DIR = (
    Path(__file__)
    .resolve()
    .parent.parent
    / "reports"
)


@router.get("/")
def list_reports():

    REPORTS_DIR.mkdir(
        exist_ok=True
    )

    pdf_files = sorted(
        REPORTS_DIR.glob("*.pdf"),
        key=lambda x: x.stat().st_mtime,
        reverse=True
    )

    return [
        {
            "name": pdf.name
        }
        for pdf in pdf_files
    ]


@router.get("/download/{filename}")
def download_report(filename: str):

    file_path = REPORTS_DIR / filename

    if not file_path.exists():

        return {
            "error": "File not found"
        }

    return FileResponse(
        path=str(file_path),
        media_type="application/pdf",
        filename=filename
    )
