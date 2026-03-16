import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260314104243 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_customer_note_customer_id" ON "customer_note" ("customer_id") WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop index if exists "IDX_customer_note_customer_id";`);
  }

}
