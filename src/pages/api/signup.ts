import { auth } from '@/lib/lucia';
import { LuciaError } from 'lucia';
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405);
  const { username, name, password } = req.body as {
    username: unknown;
    password: unknown;
    name: unknown;
  };
  // basic check

  if (
    typeof username !== 'string' ||
    username.length < 1 ||
    username.length > 31
  ) {
    return res.status(400).json({
      error: 'Invalid username',
    });
  }
  if (typeof name !== 'string' || name.length < 1 || name.length > 31) {
    return res.status(400).json({
      error: 'Invalid name',
    });
  }
  if (
    typeof password !== 'string' ||
    password.length < 1 ||
    password.length > 255
  ) {
    return res.status(400).json({
      error: 'Invalid password',
    });
  }
  try {
    await dbConnect();
    const user = await auth.createUser({
      key: {
        providerId: 'username', // auth method
        providerUserId: username.toLowerCase(), // unique id when using "username" auth method
        password, // hashed by Lucia
      },
      attributes: {
        username,
        name,
      },
    });

    const session = await auth.createSession({
      userId: user.userId,
      attributes: { username, name },
    });
    const authRequest = auth.handleRequest({
      req,
      res,
    });
    authRequest.setSession(session);
    return res.redirect(302, '/profile');
  } catch (error) {
    if (error instanceof LuciaError) {
      console.log(error.message);
      return res.status(400).json({
        error: error.message,
      });
    }

    return res.status(500).json({
      error: 'An unknown error occurred',
    });
  }
}
