import auth from './auth';
import document from './document';
import meta from './meta';

export default {
  ...{ auth },
  ...{ document },
  ...{ meta },
};
