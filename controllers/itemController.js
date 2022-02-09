import db from "../db.js";

export async function insertItems(req, res) {
  const items = req.body;
  try {
    items.map((elem) => {
      db.collection("items").insertOne(elem);
    });
    res.sendStatus(201);
    return;
  } catch {
    res.sendStatus(500);
  }
}
