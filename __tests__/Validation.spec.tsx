import { minLengthReq } from '../src/helpers/validations';

describe('using validation', () => {
  describe('checking minimum length required', () => {
    let minLength;
    describe('required length is 4', () => {
      minLength = 4;
      describe('and input text length is 0', () => {
        it('should return false', () => {
          const minLengthReqWrapper = minLengthReq({ value: '', minLength });

          expect(minLengthReqWrapper.invalid).toBeTruthy();
          expect(minLengthReqWrapper.errorMessage).toBe('Input is too short');
        });
      });
    });
  });
});
