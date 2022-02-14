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

export async function clearCart(req, res) {
  const user = res.locals.user;

  try {
    await db
      .collection("users")
      .updateOne({ _id: new ObjectId(user._id) }, { $set: { cart: [] } });

    return res.status(200).send(user);
  } catch {
    console.log("caiu no catch");
    return res.sendStatus(500);
  }
}

export async function addOne(req, res) {
  const user = res.locals.user;
  const productId = req.params.id;

  try {
    const aux = await db.collection("users").updateOne(
      { _id: new ObjectId(user._id) },
      { $inc: { "cart.$[item].quantity": 1 } },
      {
        arrayFilters: [
          {
            "item._id": { _id: new ObjectId(productId) },
          },
        ],
      }
    );
    console.log("aux: ", aux);
    return res.status(200).send(user);
  } catch {
    res.sendStatus(500);
  }
}

export async function removeOne(req, res) {
  const user = res.locals.user;
  const productId = req.params.id;

  try {
    const aux = await db.collection("users").updateOne(
      { _id: new ObjectId(user._id) },
      { $inc: { "cart.$[element].quantity": -1 } },
      {
        arrayFilters: [
          {
            element: { _id: new ObjectId(productId) },
          },
        ],
      }
    );

    console.log("aux: ", aux);

    return res.status(200).send(user);
  } catch {
    res.sendStatus(500);
  }
}
