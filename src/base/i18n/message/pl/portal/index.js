import { jsonToPair } from 'utils/jsonToPair';

import api from './api';
import forms from './forms';
import pages from './pages';
import sections from './sections';

export default {
  ...jsonToPair(api),
  ...jsonToPair(forms),
  ...jsonToPair(pages),
  ...jsonToPair(sections),
};
