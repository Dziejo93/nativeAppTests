export interface MinLengthReqParamsInterface {
  value: string;
  minLength: number;
}
export interface MinLengthReqResultInterface {
  valid: boolean;
  errorMessage: string;
}

const minLengthReq = ({
  value,
  minLength,
}: MinLengthReqParamsInterface): MinLengthReqResultInterface => {
  return {
    valid: value.length <= minLength,
    errorMessage: `Input is too short`,
  };
};

export { minLengthReq };
