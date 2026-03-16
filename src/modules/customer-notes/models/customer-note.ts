import { model } from "@medusajs/framework/utils"

export const CustomerNote = model.define("customer_note", {
  id: model.id().primaryKey(),
  customer_id: model.text().index(),
  note: model.text(),
})