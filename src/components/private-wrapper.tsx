import { ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { fetchAuthSignIn } from 'api';
import { initialUserAtom, UserAtom, userAtom } from 'atoms/user';
import { useMutationWithError } from 'hooks';
import { useRecoilState } from 'recoil';
import { appUrls } from 'urls';

type Props = {
  children: ReactElement | null;
};

const PrivateWrapper = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);
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
        language_app: response.language_app,
        language_championship: response.language_championship,
        authorization: response.authorization,
        name: response.name,
        last_name: response.last_name,
        age: response.age,
        phone: response.phone,
        continent: response.continent,
        country: response.country,
        region: response.region,
        crew: response.crew,
        datetime: response.datetime,
      };

      setUser(user);

      navigate(appUrls.app.dashboard);
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

  return user.isLoggedIn ? children : null;
};

export default PrivateWrapper;
