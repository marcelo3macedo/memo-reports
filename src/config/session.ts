import "@lib/VariableManager";

export default {
    cardsLimit: parseInt(process.env.SESSION_CARDS_LIMIT || '15')
}