from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    PageBreak
)

from reportlab.lib.styles import getSampleStyleSheet
from datetime import datetime
import os


def generate_pdf_report(result):

    os.makedirs("../reports", exist_ok=True)

    filename = (
        f"../reports/"
        f"Maintenance_Report_"
        f"{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
    )

    doc = SimpleDocTemplate(filename)

    styles = getSampleStyleSheet()

    content = []

    content.append(
        Paragraph(
            "Maintenance Wizard Report",
            styles["Title"]
        )
    )

    content.append(Spacer(1, 20))

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

    content.append(PageBreak())

    doc.build(content)

    return filename
