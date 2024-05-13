import { Event } from "./event.type";

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

// export interface Review {

//   id: number;
//   rating: number;
//   comment:string;
//   eventId?:number;
//   userId?: number;
//   user: User;
//   event: Event
// }
