// mock the user api
export default async () => {
  // sleep 500
  await new Promise((res) => setTimeout(res, 500));

  if (document.cookie.includes('swr-test-token=swr')) {
    // authorized
    return { _id: 'dfdfdfd', username: 'user' };
  }

  // not authorized
  const error = new Error('Not authorized!');
  error.status = 403;
  throw error;
};
