export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export interface Comment {
  id: number;
  text: string;
  created_by: number;
  created_at: Date;
  updated_at: Date;
  review_id: number;
  user: User;
}
