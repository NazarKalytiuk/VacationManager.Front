import { Vacation } from './vacation';
import { Claim } from './claim';

export class User {
    _id: string;
    name: string;
    email: string;
    googleId: string;
    vacations : Array<Vacation>;
    claims: Array<Claim>;
    role: number;
    accessToken: string;
    imageUrl: string;
}
