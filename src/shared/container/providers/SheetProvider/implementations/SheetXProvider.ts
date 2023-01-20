import sheets from "@config/sheets";
import axios from "axios";
import { ISheetProvider } from "../ISheetProvider";

const headers = {'Content-Type': 'application/json'}

class SheetXProvider implements ISheetProvider {
    async list(sheet):Promise<any> {
        try {
            const url = this.getListUrl(sheet)
            const options = {
                method: 'GET',
                url
            };

            const response = await axios.request(options)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    async create(sheet, data) {
        try {
            const url = this.getListUrl(sheet)
            const options = {
                method: 'POST',
                url,
                headers,
                data
            };

            await axios.request(options)            
        } catch (e) {
            console.log(e)
        }
    };

    private getListUrl(sheet) {
        return `${sheets.endpoint}/sheets/${sheets.spreadsheetId}/${sheet}`
    }
}

export { SheetXProvider };