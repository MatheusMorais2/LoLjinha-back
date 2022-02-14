import db from "../db.js";
import dayjs from "dayjs";
import { ObjectId } from "mongodb";

export async function confirmPurchase(req, res) {
  const user = res.locals.user;
  const itemList = req.body.items;

  let total = 0;
  const idList = [];

  try {
    itemList.forEach(async (elem) => {
      const itemDB = await db
        .collection("items")
        .findOne({ _id: new ObjectId(elem.item._id) });

      total += parseInt(itemDB.value);
      idList.push(itemDB._id);
    });

    const purchaseInsertion = {
      user: user,
      items: idList,
      total: total,
      date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
    };

    const purchase = await db
      .collection("purchases")
      .insertOne(purchaseInsertion);

    return res.send(purchase.insertedId).status(201);
  } catch {
    res.sendStatus(500);
  }
}
