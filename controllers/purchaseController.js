import db from "../db.js";
import dayjs from "dayjs";

export async function confirmPurchase(req, res) {
  const user = res.locals.user;
  const itemList = req.body.items;
  let total = 0;
  const idList = [];
  try {
    itemList.forEach(async (elem) => {
      const itemDB = await db.collection("items").findOne({ _id: elem.id });
      total += itemDB.price;
      idList.push(itemDB._id);
    });
    const purchaseInsertion = {
      user: user,
      items: idList,
      total: total,
      date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
    };
    await db.collection("purchases").insertOne(purchaseInsertion);
  } catch {
    res.sendStatus(500);
  }
}
