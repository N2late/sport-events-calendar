export async function up(sql) {
  await sql`
    CREATE TABLE teams (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name VARCHAR(255) NOT NULL UNIQUE,
      _sport_id integer NOT NULL REFERENCES sports (id) ON DELETE CASCADE
    )
  `;
}

export async function down(sql) {
  await sql`
    DROP TABLE teams
  `;
}
