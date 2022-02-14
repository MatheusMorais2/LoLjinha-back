import { ObjectId } from "mongodb";
import db from "../db.js";

export async function validateToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization?.replace("Bearer ", "");

  const session = await db.collection("sessions").findOne({ token });
  if (!session) {
    res.sendStatus(401);
    return;
  }

  const user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(session.userId) });
  if (!user) {
    res.sendStatus(401);
    return;
  }

  delete user.password;
  res.locals.user = user;
  next();
}
