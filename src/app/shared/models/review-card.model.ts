export interface ReviewCard {
  id: number;
  title: string;
  text: string;
  score: string;
  created_by: number;
  created_at: Date;
  updated_at: Date;
  book_id: string;
}
