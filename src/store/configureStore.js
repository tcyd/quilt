import configureStoreDev from './configureStore.dev.js';
import configureStoreProd from './configureStore.prod.js';
export default process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
