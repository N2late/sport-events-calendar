export async function up(sql) {
  await sql`
  CREATE TABLE events (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    date date NOT NULL,
    time time NOT NULL,
    _sport_id integer REFERENCES sports(id) ON DELETE CASCADE,
    _home_team_id integer REFERENCES teams(id) ON DELETE CASCADE,
    _away_team_id integer REFERENCES teams(id) ON DELETE CASCADE
  )
  `;
}

export async function down(sql) {
  await sql`
  DROP TABLE events
  `;
}
