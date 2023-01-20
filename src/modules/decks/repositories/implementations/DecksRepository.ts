import { Repository } from 'typeorm';
import AppDataSource from '@shared/infra/typeorm';

import Deck from '@modules/decks/entities/Deck';
import { IDecksRepository } from '@modules/decks/repositories/IDecksRepository';

export class DecksRepository implements IDecksRepository {
  private repository: Repository<Deck>;
  
  constructor() {
    this.repository = AppDataSource.getRepository(Deck);
  }

  async list(): Promise<Deck[]> {
    return this.repository.createQueryBuilder()
      .getMany()
  }
}