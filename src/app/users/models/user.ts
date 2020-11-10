// model
export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// User class is a Model
export class User implements IUser{
  id: number;
  name: string;
  email: string;
  phone: string;
}
