import server from '@config/server'
import logger from '@lib/LogManager'
import { app } from './app'

app.listen(server.port, () => logger.info(`Server running on port ${server.port}`))