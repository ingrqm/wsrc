import auth from './auth';
import document from './document';
import error from './error';
import meta from './meta';

export default {
  ...{ auth },
  ...{ document },
  ...{ error },
  ...{ meta },
};
