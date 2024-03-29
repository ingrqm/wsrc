import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App, Auth, Championship, Document, Error } from 'layouts';
import { appRoutes, appUrls } from 'urls';
import {
  Dashboard,
  NotAuthorized,
  NotFound,
  PasswordRecovery,
  PasswordRemind,
  Reading,
  Results,
  Review,
  SignIn,
  SignUp,
  Statute,
  Test,
  Users,
  PersonalData,
} from 'views';
import { Head } from 'components';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={appRoutes.base} element={<Head />}>
        <Route index element={<Navigate to={appUrls.auth.signIn} />} />
        <Route path={appRoutes.championship.base} element={<Championship />}>
          <Route path={appRoutes.championship.reading} element={<Reading />} />
          <Route path={appRoutes.championship.test} element={<Test />} />
          <Route path={appRoutes.championship.review} element={<Review />} />
        </Route>
        <Route path={appRoutes.app.base} element={<App />}>
          <Route index element={<Navigate to={appUrls.app.dashboard} />} />
          <Route path={appRoutes.app.dashboard} element={<Dashboard />} />
          <Route path={appRoutes.app.results} element={<Results />} />
          <Route path={appRoutes.app.users} element={<Users />} />
          <Route path={appRoutes.app.personalData} element={<PersonalData />} />
        </Route>
        <Route path={appRoutes.auth.base} element={<Auth />}>
          <Route index element={<Navigate to={appUrls.auth.signIn} />} />
          <Route path={appRoutes.auth.signIn} element={<SignIn />} />
          <Route path={appRoutes.auth.signUp} element={<SignUp />} />
          <Route path={appRoutes.auth.passwordRemind} element={<PasswordRemind />} />
          <Route path={appRoutes.auth.passwordRecovery} element={<PasswordRecovery />} />
        </Route>
        <Route path={appRoutes.document.base} element={<Document />}>
          <Route path={appRoutes.document.statute} element={<Statute />} />
        </Route>
        <Route path={appRoutes.error.base} element={<Error />}>
          <Route path={appRoutes.error.notFound} element={<NotFound />} />
          <Route path={appRoutes.error.notAuthorized} element={<NotAuthorized />} />
        </Route>
      </Route>
      <Route path='*' element={<Navigate to={appUrls.error.notFound} />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
