interface ISheetProvider {
    list(sheet):any;
    create(sheet, data:any):void;
}

export { ISheetProvider };