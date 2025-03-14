export interface UserData {
  id?: string | number | null;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: string;
  birthDate: string;
  image?: string;
}
export interface AuthContextType {
  userDataAuth: UserData | null;
  saveUserData: () => void;
}
