import { container } from 'tsyringe';
import logger from '@lib/LogManager';
import { GenerateReportsUseCases } from './GenerateReportsUseCases';

export class GenerateReportsTask {
    async handle() {
        try {
            const generateReportsUseCases = container.resolve(GenerateReportsUseCases);
            await generateReportsUseCases.execute();
        } catch (e) {
            logger.error(`[GenerateReportsUseCases] Handle: ${e.message}`)
        }
    }
}