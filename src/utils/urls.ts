const getApiUrl = (): string => {
  let API_URL = '';

  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('Required NEXT_PUBLIC_API_URL is not configured correctly in .env file.');
  }

  API_URL = process.env.NEXT_PUBLIC_API_URL;

  return API_URL;
};

export default { API_URL: getApiUrl() };
