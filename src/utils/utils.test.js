import { replaceParams } from './utils';

describe('Utils test', () => {
  test('Should replace params', () => {
    const url = '/v1/markers/:id';
    const params = { id: 1};
    expect(replaceParams(url, params).toEqual('/v1/markers/1'));
  });
});
