import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "users",
  password: "pataki",
  port: 1234,
});

export default pool;
