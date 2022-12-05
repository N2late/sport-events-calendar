export async function up(sql) {
  await sql`
    INSERT INTO teams (name, _sport_id)
    VALUES
      ('Portugal', 1),
      ('France', 1),
      ('Germany', 1),
      ('Spain', 1),
      ('England', 1),
      ('Ghana', 1),
      ('Netherlands', 1),
      ('USA', 1),
      ('Brazil', 1),
      ('Argentina', 1),
      ('Australia', 1),
      ('Senegal', 1),
      ('Poland', 1),
      ('Belgium', 1),
      ('Croatia', 1),
      ('Switzerland', 1),
      ('Boston Celtics', 2),
      ('Brooklyn Nets', 2),
      ('New York Knicks', 2),
      ('Philadelphia 76ers', 2),
      ('Toronto Raptors', 2),
      ('Chicago Bulls', 2),
      ('Cleveland Cavaliers', 2),
      ('Detroit Pistons', 2),
      ('Indiana Pacers', 2),
      ('Milwaukee Bucks', 2),
      ('Atlanta Hawks', 2),
      ('Charlotte Hornets', 2),
      ('Miami Heat', 2),
      ('Orlando Magic', 2),
      ('Washington Wizards', 2),
      ('Denver Nuggets', 2),
      ('Minnesota Timberwolves', 2),
      ('Oklahoma City Thunder', 2),
      ('Portland Trail Blazers', 2),
      ('Utah Jazz', 2),
      ('Golden State Warriors', 2),
      ('Bemer Pioneers Vorarlberg', 3),
      ('ec Idm Heat Pumps Vsv', 3),
      ('ec Red Bull Salzburg', 3),
      ('ec-kac', 3),
      ('hc Pustertal Wolves', 3),
      ('hc Tiwag Innsbruck - The Sharks', 3),
      ('hcb South Tyrol Alperia', 3),
      ('hk Sz Olimpija', 3),
      ('Hydro Fehervar Av19', 3),
      ('Migross Supermercati Asiago', 3),
      ('Moser Medical Graz99ers', 3),
      ('Spusu Vienna Capitals', 3),
      ('Steinbach Black Wings Linz', 3)
  `;
}

export async function down(sql) {
  await sql`
    DELETE FROM teams
  `;
}
