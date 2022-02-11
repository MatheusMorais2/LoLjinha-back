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

    const updatedCart = [...user.cart, item];

    const update = await db
      .collection("users")
      .updateOne({ _id: user._id }, { $set: { cart: updatedCart } });

    if (update) {
      return res.sendStatus(200);
    }
  } catch {
    res.sendStatus(500);
  }
}
