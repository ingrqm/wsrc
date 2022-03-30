import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, userAtom } from 'atoms/user';
import { Permission } from 'enums';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';

const Dashboard = () => {
  const user = useRecoilValue(userAtom) as User;
  const navigate = useNavigate();

  const isAuthorized = [Permission.user, Permission.arbiter, Permission.admin, Permission.superAdmin].includes(
    user?.permission
  );

  useEffect(() => {
    if (!isAuthorized) {
      navigate(appUrls.error.notAuthorized);
    }
  }, []);

  return !isAuthorized ? null : <>Dashboard</>;
};

export default Dashboard;
