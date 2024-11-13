// FORMS

export type LoginFormType = {
  email: string;
  password: string;
};
export type RegisterFormType = {
  fullName: string | (readonly string[] & string) | undefined;
  email: string;
  password: string;
  confirmPassword: string;
  organisationName: string;
  industry: string;
  organisationSize: string;
  country: string;
  terms: boolean;
  address: string;
  phoneNumber: string;
};