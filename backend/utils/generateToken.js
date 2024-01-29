
import jwt from "jsonwebtoken";


const generateToken = async (res, clientID) => {
  const token = jwt.sign(
    {
      id: clientID
    },
    process.env.JWT_KEY,
    { expiresIn: "1h" }
  );

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 1 * 60 * 60 * 1000,
  });
};

export { generateToken };
