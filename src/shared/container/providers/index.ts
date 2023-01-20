import { container } from "tsyringe";

import { SheetXProvider } from "./SheetProvider/implementations/SheetXProvider";
import { ISheetProvider } from "./SheetProvider/ISheetProvider";

container.registerSingleton<ISheetProvider>(
    "SheetXProvider",
    SheetXProvider
);