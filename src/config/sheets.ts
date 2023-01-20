import "@lib/VariableManager";

export default {
    endpoint: process.env.SHEETX_ENDPOINT,
    spreadsheetId: process.env.SHEETX_SPREADSHEETID,
    users: process.env.SHEETX_SHEET_USERS,
    user_id: process.env.SHEETX_SHEET_USERS_KEY,
    users_columns: (process.env.SHEETX_SHEET_USERS_COLUMNS || '').split(','),
    decks: process.env.SHEETX_SHEET_DECKS,
    deck_id: process.env.SHEETX_SHEET_DECKS_KEY,
    deck_columns: (process.env.SHEETX_SHEET_DECKS_COLUMNS || '').split(',')
}