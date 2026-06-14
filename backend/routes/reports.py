from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from pathlib import Path

router = APIRouter()

# backend/reports folder
REPORTS_DIR = Path(__file__).resolve().parent.parent / "reports"


@router.get("/")
def reports():

    pdfs = []

    if REPORTS_DIR.exists():

        for pdf in REPORTS_DIR.glob("*.pdf"):

            pdfs.append({
                "name": pdf.name
            })

    return pdfs


@router.get("/download/{filename}")
def download_report(filename: str):

    file_path = REPORTS_DIR / filename

    if not file_path.exists():

        raise HTTPException(
            status_code=404,
            detail="Report not found"
        )

    return FileResponse(
        path=str(file_path),
        media_type="application/pdf",
        filename=filename
    )
