import { useRouter } from 'next/router';

import { useMutation } from 'react-query';

import { request } from 'base/api';

import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import * as yup from 'yup';

import { Typography, Grid, Card, CardContent, CardActions, Box, Button } from '@material-ui/core';

import { appUrls, apiUrls } from 'urls';

import { FileInput } from '@components';

import { StyledForm } from './Competition.styled.js';

const input = {
  file: 'file',
};

const validationSchema = yup.object({
  [input.file]: yup.string(),
});

const competition = async (values) => {
  return await request(process.env.NEXT_PUBLIC_API_URL, 'POST', apiUrls.portal.competition, values);
};

const Competition = () => {
  const router = useRouter();
  const { stage } = router.query;
  const { enqueueSnackbar } = useSnackbar();

  const { isLoading, mutate: mutateCompetition } = useMutation(competition, {
    onError: () => {
      enqueueSnackbar('an error occured', { variant: 'error' });
    },
    onSuccess: () => {
      enqueueSnackbar('image has been sent', { variant: 'success' });

      setTimeout(() => {
        router.push(appUrls.app.dashboard);
      }, 1000);
    },
  });

  const formik = useFormik({
    initialValues: {
      [input.file]: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const payload = {
        token: sessionStorage.getItem('token'),
        category: stage,
        file: values.file,
      };

      mutateCompetition(payload);
    },
  });

  return (
    <StyledForm autoComplete="off" onSubmit={formik.handleSubmit}>
      <Grid container>
        <Grid md={4} xs={12} item>
          <Box px={2}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {stage}
                </Typography>
                <FileInput field={input.file} formik={formik} />
              </CardContent>
              <CardActions>
                <Button color="primary" disabled={isLoading} type="submit">
                  Save
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </StyledForm>
  );
};

export default Competition;
