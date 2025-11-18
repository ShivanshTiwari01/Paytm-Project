import jwt from 'jsonwebtoken';

function generateToken(payload: string) {
  return `${jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXP as any,
  })}`;
}

export default generateToken;
