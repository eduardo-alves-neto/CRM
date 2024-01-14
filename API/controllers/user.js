import { db } from "../db.js";

export const getUsers = (_, res) => {
  const Query = "SELECT * FROM users";
  db.query(Query, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};
