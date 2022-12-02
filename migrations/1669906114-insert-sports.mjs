export async function up(sql) {
  await sql`
    INSERT INTO sports (name)
    VALUES
      ('Football'),
      ('Basketball'),
      ('Ice Hockey')
  `;
}

export async function down(sql) {
  await sql`
    DELETE FROM sports
  `;
}
