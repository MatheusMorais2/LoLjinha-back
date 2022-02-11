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

export async function getItems(req, res) {
  try {
    const listItens = await db.collection("items").find().limit(8).toArray();

    res.send(listItens);
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
}
