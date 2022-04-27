import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, userAtom } from 'atoms/user';
import { Permission } from 'enums';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { TableAll, TableAssessed, TableAssignToMe } from './components';

const Results = () => {
  const user = useRecoilValue(userAtom) as User;
  const navigate = useNavigate();

  const isAuthorized = useMemo(
    () => [Permission.arbiter, Permission.admin, Permission.superAdmin].includes(user?.permission),
    [user?.permission]
  );

  useEffect(() => {
    if (!isAuthorized) {
      navigate(appUrls.error.notAuthorized);
    }
  }, []);

  return !isAuthorized ? null : (
    <>
      {Permission.arbiter === user?.permission && <TableAssignToMe />}
      {[Permission.admin, Permission.superAdmin].includes(user?.permission) && (
        <>
          <TableAll />
          <TableAssessed />
        </>
      )}
    </>
  );
};

export default Results;
