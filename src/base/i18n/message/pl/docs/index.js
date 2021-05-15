import { jsonToPair } from 'util/jsonToPair';

import pages from './pages';
import sections from './sections';

export default {
    ...jsonToPair(pages),
    ...jsonToPair(sections),
};
