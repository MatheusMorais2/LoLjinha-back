import db from "../db.js";

export default async function getCart(req, res) {
  const user = res.locals.user;

  try {
    let items = [];

    user.cart.map((elem) => {
      const item = await db.collection("items").findOne({ _id: elem });
      items.push(item);
    });

    res.status(200).send(items);
  } catch {
    res.sendStatus(500);
  }
}
