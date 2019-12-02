export interface MinLengthReqParamsInterface {
  value: string;
  minLength: number;
}
export interface MinLengthReqResultInterface {
  invalid: boolean;
  errorMessage: string;
}

const minLengthReq = ({
  value,
  minLength,
}: MinLengthReqParamsInterface): MinLengthReqResultInterface => {
  return {
    invalid: value.length < minLength,
    errorMessage: `Input is too short`,
  };
};

export { minLengthReq };
