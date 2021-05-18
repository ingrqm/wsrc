import { jsonToPair } from 'util/jsonToPair';

import api from './api';
import pages from './pages';
import sections from './sections';

export default {
  ...jsonToPair(api),
  ...jsonToPair(pages),
  ...jsonToPair(sections),
};
