export interface MinLengthReqParamsInterface {
  value: string;
  minLength: number;
}
export interface TestIncludesAValidatorInterface {
  value: string;
}

export interface ResultInterface {
  invalid: boolean;
  errorMessage: string;
}

const minLengthReq = ({
  value,
  minLength,
}: MinLengthReqParamsInterface): ResultInterface => {
  return {
    invalid: value.length < minLength,
    errorMessage: 'Input is too short',
  };
};

const testIncludesAValidator = ({
  value,
}: TestIncludesAValidatorInterface): ResultInterface => {
  return { invalid: value.includes('a'), errorMessage: 'Input has a' };
};

export { minLengthReq, testIncludesAValidator };
