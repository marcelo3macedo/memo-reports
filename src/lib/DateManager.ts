class DateManager {
    static getActualDate() {
        return new Date().toISOString()
    }

    static getActualDateFirstHour() {
        const firstDayDate = new Date()
        firstDayDate.setHours(0,0,0,0)

        return firstDayDate.toISOString()
    }
}

export default DateManager