import Deck from '../entities/Deck';

export interface IDecksRepository {
  list(): Promise<Deck[]>;
}