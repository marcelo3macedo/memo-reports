class SessionManager {
    static getDeckIdsFromSessions(sessions) {
        return sessions.map(item => item.deckId)
          .filter((value, index, self) => self.indexOf(value) === index)
    }
}

export default SessionManager