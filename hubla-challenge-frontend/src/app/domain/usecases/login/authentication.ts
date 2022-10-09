export interface Authentication {
  signIn: (params: Authentication.Params) => Promise<Authentication.Response>;
}

export namespace Authentication {
  export type Params = {
    email: string;
    password: string;
  };

  export interface Response {
    access_token: string;
    user: User;
  }

  export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    permission: string;
    companyName: string | null;
    employee: boolean;
  }
}
