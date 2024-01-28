import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (!token) {
    res.status(401).json({ message: "Unauthorized! Token required!" });
  }

  try {
    jwt.verify(token, process.env.JWT_KEY);
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized! Invalid Token!" });
  }
};

export { verifyToken };
