export interface IUser {
  name: string;
  email?: string;
  score: number;
  donateScore(score: number): boolean;
}
