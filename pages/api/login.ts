import { NextApiRequest, NextApiResponse } from 'next';

export default async function handleLogin(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;
  console.log(`under development, Received username: ${username}, password: ${password}`);
  res.json({ name: 'John Doe', username: username.toUpperCase() });
}