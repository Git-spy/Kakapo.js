import test from 'tape';
import _ from 'lodash';

import { fakeService } from '../../src/interceptors/xhrInterceptor';
import { nativeXHR } from '../../src/helpers/nativeServices';

export const xhrInterceptorSpec = () => {
  test('xhrInterceptor . constructor', (assert) => {
    const XMLHttpRequestInterceptor = fakeService({});
    const xhrInterceptor = new XMLHttpRequestInterceptor();
    const xhrInterceptorOwnProps = ['xhr'];

    assert.ok(
      xhrInterceptorOwnProps.every(_.partial(_.has, xhrInterceptor)),
      'Interceptor has own properties defined in constructor'
    );

    assert.end();
  });
};
