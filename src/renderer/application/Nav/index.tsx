import { useState } from 'react';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';

function Nav() {
  const [url, setUrl] = useState('');
  const history = useHistory();
  const location = useLocation();
  const cb = () => history.push(url);
  return (
    <div>
      {location && <div>{JSON.stringify(location)}</div>}
      <input type="text" onChange={(e) => setUrl(e.target.value)} />
      <button onClick={cb}>Click</button>
    </div>
  );
}

export default Nav;
