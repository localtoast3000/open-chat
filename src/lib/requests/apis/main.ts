import BasicHttpRequests from '../base';
import config from '@root/openchat.config';

export default (() => {
  return {
    ...BasicHttpRequests(config.mainApiOrigin),
  };
})();
