import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

type Body = {
  note: string
}

export async function POST(
  req: MedusaRequest<Body>,
  res: MedusaResponse
) {
  const { customer_id } = req.params
  const { note } = req.body

  const service = req.scope.resolve("customerNotes")

  const created = await service.createCustomerNotes({
    customer_id,
    note
  })

  res.json(created)
}

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
) {
  const { customer_id } = req.params

  const service = req.scope.resolve("customerNotes")

  const notes = await service.listCustomerNotes({
    customer_id
  })

  res.json(notes)
}

export const AUTHENTICATE = false