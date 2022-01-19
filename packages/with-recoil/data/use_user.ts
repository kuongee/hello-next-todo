import useSWR from 'swr';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
import userFetcher from '../libs/api-user';

export default function useUser() {
  // const { data, mutate, error } = useSWR(
  //   'http://52.79.178.132:4000/api/post/check',
  //   fetcher
  // );
  const { data, mutate, error } = useSWR('api_user', userFetcher);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}
