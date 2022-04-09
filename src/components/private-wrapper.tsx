import { ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { fetchAuthSignIn } from 'api';
import { timeAtom } from 'atoms/time';
import { initialUserAtom, UserAtom, userAtom } from 'atoms/user';
import { useMutationWithError } from 'hooks';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { appUrls } from 'urls';

type Props = {
  children: ReactElement | ReactElement[] | null;
};

const PrivateWrapper = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);
  const setTime = useSetRecoilState(timeAtom);
  const { t } = useTranslation();

  const authSignInToken = useMutationWithError(fetchAuthSignIn, {
    mutationKey: 'signInTokenMutate',
    errorMessage: t('form.signInToken.messages.error'),
    onError: () => {
      setUser(initialUserAtom);
      navigate(appUrls.auth.signIn);
    },
    onSuccess: (response) => {
      const user: UserAtom = {
        isLoggedIn: true,
        id: response.id,
        mail: response.mail,
        permission: response.permission,
        languageApp: response.languageApp,
        languageChampionship: response.languageChampionship,
        authorization: response.authorization,
        name: response.name,
        lastName: response.lastName,
        age: response.age,
        phone: response.phone,
        continent: response.continent,
        country: response.country,
        region: response.region,
        crew: response.crew,
        datetime: response.join,
      };

      setUser(user);
      setTime(new Date(response.time));
    },
  });

  useEffect(() => {
    if (user.isLoggedIn) return;
    const token = sessionStorage.getItem('authorization') || localStorage.getItem('authorization');

    if (token === null) {
      navigate(appUrls.auth.signIn);
    } else {
      authSignInToken.mutateAsync({});
    }
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return user.isLoggedIn ? <>{children}</> : null;
};

export default PrivateWrapper;
