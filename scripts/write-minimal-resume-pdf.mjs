import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outPath = path.join(__dirname, "..", "public", "resume.pdf")

const chunks = []
/** @param {string} s */
function w(s) {
  chunks.push(Buffer.from(s, "binary"))
}

const offsets = []

function startObj(n) {
  offsets[n] = Buffer.concat(chunks).length
}

w("%PDF-1.4\n")

startObj(1)
w("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n")

startObj(2)
w("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n")

startObj(3)
w(
  "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n"
)

const stream =
  "BT /F1 14 Tf 72 720 Td (Replace this file with your resume PDF.) Tj ET"
startObj(4)
w(`4 0 obj\n<< /Length ${Buffer.byteLength(stream, "binary")} >>\nstream\n${stream}\nendstream\nendobj\n`)

startObj(5)
w("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n")

const xrefPos = Buffer.concat(chunks).length

let xref = "xref\n0 6\n0000000000 65535 f \n"
for (let i = 1; i <= 5; i++) {
  xref += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`
}
xref += "trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n"
xref += `${xrefPos}\n%%EOF\n`

w(xref)

fs.writeFileSync(outPath, Buffer.concat(chunks))
console.log("Wrote", outPath)
