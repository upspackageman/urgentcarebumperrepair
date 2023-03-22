import { Result } from "./result";

export interface Model {
    Count: number;
    Message: string;
    SearchCriteria: string;
    Results:  Result[];
  }
  
  