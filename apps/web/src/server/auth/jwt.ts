import { User } from "db";
import * as jose from "jose";

export async function createToken(user: Pick<User, "id" | "email">) {
  const alg = "HS256";
  const secret = new TextEncoder().encode("secret");
  const payload = {
    uid: user.id,
    email: user.email,
  };

  const token = await new jose.SignJWT({
    ...payload,
  })
    .setProtectedHeader({ alg })
    .setSubject(user.id.toString())
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret);

  return token;
}

export const verifyIdToken = async (token: string) => {
  const secret = new TextEncoder().encode("secret");

  const { payload } = await jose.jwtVerify(token, secret);

  return payload;
};

export const createRefreshToken = async (user: Pick<User, "id">) => {
  const alg = "HS256";
  const secret = new TextEncoder().encode("secret");

  const token = await new jose.SignJWT({})
    .setProtectedHeader({ alg })
    .setSubject(user.id.toString())
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret);

  return token;
};
