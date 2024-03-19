export interface FormSignUp {
  username:     string;
  email:        string;
  password:     string;
  ci:           string;
  address:      string;
}

export interface ResponseSignUp{
  message:        string;
  status:         number;
}