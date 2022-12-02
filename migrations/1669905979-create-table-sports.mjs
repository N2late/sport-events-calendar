export async function up(sql) {
  await sql`
    CREATE TABLE sports (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name VARCHAR(255) NOT NULL UNIQUE
    )
  `;
}

export async function down(sql) {
  await sql`
    DROP TABLE sports
  `;
}
