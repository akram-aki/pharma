const queries = {
  addUserQuery: `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
  `,

  dupEmailCheck: "SELECT * FROM users WHERE email = $1",
  updateNameQuery:
    "UPDATE users SET name = $1  WHERE id = $2 RETURNING email, password",
  updatePasswordQuery:
    "UPDATE users SET password = $1  WHERE id = $2 RETURNING email, password",
  updateNameAndPassQuery:
    "UPDATE users SET name = $1 , password = $2   WHERE id = $3 RETURNING email, password",
  addUserAccomodationQuery: `
    INSERT INTO useraccomodations (id, title, adress,addedphotos,description,perks,extrainfo,checkin,maxguests)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
  `,
};

export { queries };
