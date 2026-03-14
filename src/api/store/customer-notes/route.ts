import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

type CreateCustomerNoteBody = {
  customer_id: string
  note: string
}

export async function POST(
  req: MedusaRequest<CreateCustomerNoteBody>,
  res: MedusaResponse
) {
  const { customer_id, note } = req.body

  const customerNotesService = req.scope.resolve("customerNotes")

  const created = await customerNotesService.createCustomerNotes({
    customer_id,
    note
  })

  res.json(created)
}

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
) {
  const service = req.scope.resolve("customerNotes")

  const notes = await service.listCustomerNotes()

  res.json(notes)
}