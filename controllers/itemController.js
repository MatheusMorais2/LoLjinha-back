import db from "../db.js";
import { ObjectId } from "mongodb";

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

export async function showItem(req, res) {
  const { id } = req.params;
  try {
    const item = await db
      .collection("items")
      .findOne({ _id: new ObjectId(id) });

    if (!item) {
      res.sendStatus(404);
      return;
    }
    res.send(item);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function getAllItems(req, res) {
  try {
    const listItens = await db.collection("items").find().toArray();
    res.send(listItens);
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
}

export async function getArmor(req, res) {
  try {
    const listItens = await db
      .collection("items")
      .find({ type: "Armor" })
      .toArray();
    res.send(listItens);
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
}

export async function getWeapon(req, res) {
  try {
    const listItens = await db
      .collection("items")
      .find({ type: "Weapon" })
      .toArray();
    res.send(listItens);
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
}

export async function getHeal(req, res) {
  try {
    const listItens = await db
      .collection("items")
      .find({ type: "Heal" })
      .toArray();
    res.send(listItens);
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
}
