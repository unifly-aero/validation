export {Utilities} from './utilities';
export {ValidationConfig} from './validation-config';
export {ValidationLocale} from './validation-locale';
export * from './validation-result';
export * from './validation-rules';
export {Validation} from './validation';
export {ValidationGroup} from './validation-group';
export {ensure} from './decorators';

import {ValidationConfig} from './validation-config';
import {Validation} from './validation';

export function configure(aurelia, configCallback) {
  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(Validation.defaults);
  }
  aurelia.singleton(ValidationConfig, Validation.defaults);
  return Validation.defaults.locale();
}
