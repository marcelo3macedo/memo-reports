import { inject, injectable } from 'tsyringe';
import sheets from '@config/sheets';
import RowManager from '@lib/RowManager';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { IDecksRepository } from '@modules/decks/repositories/IDecksRepository';
import { ISheetProvider } from '@shared/container/providers/SheetProvider/ISheetProvider';

@injectable()
export class GenerateReportsUseCases {
  constructor(
     @inject("UserRepository")
     private userRepository: IUsersRepository,
     @inject("DecksRepository")
     private decksRepository: IDecksRepository,
     @inject("SheetXProvider")
     private sheetXProvider: ISheetProvider
  ) {}

  async execute() {
    this.feedClients()
    this.feedDecks()
  }

  async feedClients() {
    const sheetData = await this.sheetXProvider.list(sheets.users)
    const users = await this.userRepository.list() 

    const newOnes = RowManager.getNewOnes(users, sheetData, sheets.user_id)
    const formatted = RowManager.formatInsert(newOnes, sheets.users_columns)
    await this.sheetXProvider.create(sheets.users, formatted)
  }

  async feedDecks() {
    const sheetData = await this.sheetXProvider.list(sheets.decks)
    const decks = await this.decksRepository.list() 

    const newOnes = RowManager.getNewOnes(decks, sheetData, sheets.deck_id)
    const formatted = RowManager.formatInsert(newOnes, sheets.deck_columns)
    await this.sheetXProvider.create(sheets.decks, formatted)
  }
}