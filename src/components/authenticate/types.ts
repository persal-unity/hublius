import { authenticationSteps } from './constants';

export type AuthenticationStep =
  (typeof authenticationSteps)[keyof typeof authenticationSteps];
