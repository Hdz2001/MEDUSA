import CustomerNotesService from "./service"
import { Module } from "@medusajs/framework/utils"

export const CUSTOMER_NOTES_MODULE = "customerNotes"

export default Module(CUSTOMER_NOTES_MODULE, {
  service: CustomerNotesService,
})