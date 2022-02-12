import { ObjectId } from "mongodb";
import db from "../db.js";

export async function putItemIntoCart(req, res) {
  const user = res.locals.user;
  const { id } = req.params;

  if (!user) {
    return res.sendStatus(403);
  }

  try {
    const item = await db
      .collection("items")
      .findOne({ _id: new ObjectId(id) });

    if (!item) {
      return res.status(404).send("Item not found");
    }

    const updatedCart = [...user.cart, { item: item, quantity: 1 }];

    const update = await db
      .collection("users")
      .updateOne({ _id: user._id }, { $set: { cart: updatedCart } });

    if (update) {
      console.log("Colocou no carrinho");
      return res.sendStatus(200);
    }
  } catch {
    res.sendStatus(500);
  }
}

export async function getCart(req, res) {
  const user = res.locals.user;
  if (!user) {
    return res.sendStatus(403);
  }
  res.status(200).send(user.cart);
}
