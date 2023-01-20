import { container } from 'tsyringe';
import './providers';

import UserRepository from "@modules/users/repositories/implementations/UserRepository";
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import { DecksRepository } from "@modules/decks/repositories/implementations/DecksRepository";
import { IDecksRepository } from '@modules/decks/repositories/IDecksRepository';

container.registerSingleton<IUsersRepository>('UserRepository', UserRepository);
container.registerSingleton<IDecksRepository>('DecksRepository', DecksRepository);