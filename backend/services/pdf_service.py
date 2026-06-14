from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    PageBreak
)

from reportlab.lib.styles import getSampleStyleSheet
from datetime import datetime
from pathlib import Path


def generate_pdf_report(result):

    reports_dir = (
        Path(__file__)
        .resolve()
        .parent.parent
        / "reports"
    )

    reports_dir.mkdir(
        parents=True,
        exist_ok=True
    )

    filename = (
        reports_dir
        /
        f"Maintenance_Report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
    )

    doc = SimpleDocTemplate(
        str(filename)
    )

    styles = getSampleStyleSheet()

    content = []

    content.append(
        Paragraph(
            "Maintenance Wizard Report",
            styles["Title"]
        )
    )

    content.append(
        Spacer(1, 20)
    )

    for key, value in result.items():

        content.append(
            Paragraph(
                f"<b>{key.replace('_',' ').title()}</b>",
                styles["Heading2"]
            )
        )

        content.append(
            Paragraph(
                str(value),
                styles["BodyText"]
            )
        )

        content.append(
            Spacer(1, 10)
        )

    content.append(
        PageBreak()
    )

    doc.build(content)

    return str(filename)
