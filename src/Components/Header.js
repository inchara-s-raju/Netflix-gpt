import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect, useState } from 'react';
import { LOGO, SUPPORTED_LANG, USER_AVATAR } from '../utils/constants';
import { clearGptSuggestion, toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    // unsubsctribe when component unmounts
    return () => unsubscribe();
  }, []);
  const handleClick = () => {
    setShowIcon(!showIcon);
    setDisplayName(user.displayName);
  };
  const handleGPTSearchClick = () => {
    //Toggle GPT Search button
    dispatch(toggleGPTSearchView());
    showGPTSearch && dispatch(clearGptSuggestion());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO} alt='netflix_logo' />
      {user && (
        <div>
          <div className='flex p-2'>
            {showGPTSearch && (
              <select
                className='bg-transparent text-white border border-solid border-white rounded-lg'
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}
                    className='text-black'
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className='text-white  px-4 mx-4 bg-transparent border border-solid border-slate-300 rounded-md'
              onClick={handleGPTSearchClick}
            >
              {showGPTSearch ? 'Home' : 'GPT Search'}
            </button>
            <img
              alt='user--icon'
              src={USER_AVATAR}
              className='w-8 h-8 mt-1'
            ></img>
            <span
              className='text-white font-bold cursor-pointer p-2'
              onClick={handleClick}
            >
              ^
            </span>
          </div>
          {showIcon && (
            <div className='float-right'>
              {displayName && <h2 className='text-white'>{displayName}</h2>}
              <button onClick={handleSignOut} className='text-white font-bold'>
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
