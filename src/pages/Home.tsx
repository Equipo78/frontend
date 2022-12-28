import { useSelector } from 'react-redux';

import { selectCurrentToken, selectCurrentUser } from '../features/login/authSlice';

export const Home = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Wecome ${user}!` : 'Welcome';
  const tokenAbbr = `${token?.slice(0, 9)}...`;

  return (
    <div>
      <h1>{welcome}</h1>
      <p>Token: {tokenAbbr}</p>
    </div>
  );
};

export default Home;
