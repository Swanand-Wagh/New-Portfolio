import axios from 'axios';

import { GITHUB_ACCOUNTS } from '@/common/constant/github';

const GITHUB_USER_ENDPOINT = 'https://api.github.com/graphql';

const GITHUB_USER_QUERY = `query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`;

interface GithubResult {
  status: number;
  data: unknown;
  error?: string;
}

export const fetchGithubData = async (
  username: string,
  token: string | undefined,
): Promise<GithubResult> => {
  if (!token) {
    return {
      status: 500,
      data: {},
      error: 'GITHUB_READ_USER_TOKEN_PERSONAL is not set',
    };
  }

  try {
    const { data: body } = await axios.post(
      GITHUB_USER_ENDPOINT,
      {
        query: GITHUB_USER_QUERY,
        variables: {
          username: username,
        },
      },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    );

    // GitHub returns HTTP 200 with an `errors` array for query-level failures,
    // so a 2xx alone is not success.
    if (body?.errors?.length) {
      return { status: 502, data: {}, error: body.errors[0]?.message };
    }

    if (!body?.data?.user) {
      return { status: 404, data: {}, error: `No such user: ${username}` };
    }

    return { status: 200, data: body.data.user };
  } catch (error) {
    // Axios rejects on non-2xx, so this is the only path a 401/403/5xx takes.
    // Return the message instead of rethrowing — an unhandled rejection here
    // dumps the entire axios request object into the server log.
    if (axios.isAxiosError(error)) {
      return {
        status: error.response?.status ?? 502,
        data: {},
        error: error.response?.data?.message ?? error.message,
      };
    }
    return { status: 500, data: {}, error: (error as Error).message };
  }
};

export const getGithubUser = async (type: string): Promise<GithubResult> => {
  const account = GITHUB_ACCOUNTS.find(
    (account) => account?.type === type && account?.is_active,
  );

  if (!account) {
    return { status: 400, data: {}, error: `Invalid user type: ${type}` };
  }

  const { username, token } = account;
  return await fetchGithubData(username, token);
};
