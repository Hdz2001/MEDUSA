import { MedusaService } from "@medusajs/framework/utils"
import { CustomerNote } from "./models/customer-note"

class CustomerNotesService extends MedusaService({
  CustomerNote,
}) {}

export default CustomerNotesService