import BasicHttpRequests from '../base';
import config from '@root/diday.config';

export default (() => {
  return {
    ...BasicHttpRequests(config.mainApiOrigin),
  };
})();
