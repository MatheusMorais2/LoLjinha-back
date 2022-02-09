import signupSchema from "../schemas/signupSchema.js";

export default function signupSchemaValidation(req, res, next) {
  const user = req.body;
  const validation = signupSchema.validate(user);

  if (validation.error) {
    res.status(422).send(validation.error.details);
    return;
  }
  next();
}
