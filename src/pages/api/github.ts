import { NextApiRequest, NextApiResponse } from 'next';

import { getGithubUser } from '@/services/github';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const queryParams = req.query;

  let type = '';

  if (typeof queryParams.type === 'string') {
    type = queryParams.type;
  } else if (Array.isArray(queryParams.type)) {
    type = queryParams.type[0];
  }

  const response = await getGithubUser(type);

  if (response.error) {
    console.error(`[api/github] ${response.status}: ${response.error}`);
    return res.status(response.status).json({ error: response.error });
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30',
  );

  return res.status(200).json(response.data);
}
