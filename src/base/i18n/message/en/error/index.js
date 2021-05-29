import { jsonToPair } from 'utils/jsonToPair';

import pages from './pages';
import sections from './sections';

export default {
  ...jsonToPair(pages),
  ...jsonToPair(sections),
};
