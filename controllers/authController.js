/* import v4 from "uuid"; */
import bcrypt from "bcrypt";

import db from "../db.js";

export async function signUp(req, res) {
  const user = req.body;

  try {
    let isEmailduplicate = await db
      .collection("users")
      .findOne({ email: user.email });
    if (isEmailduplicate) {
      res.status(409).send("Email já cadastrado");
      return;
    }

    const encryptedPassword = bcrypt.hashSync(user.password, 10);
    await db
      .collection("users")
      .insertOne({ ...user, password: encryptedPassword });

    res, sendStatus(201);
    return;
  } catch {
    res.sendStatus(500);
  }
}
