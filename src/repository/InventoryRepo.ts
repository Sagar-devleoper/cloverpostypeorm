import { Inventory } from "../entity/Inventory";
import { AppDataSource } from "../data-source";

const findInventoryData = AppDataSource.getRepository(Inventory)

const findData = async (req: any, res: any) => {
    await findInventoryData.findOneBy({
        Inventory_Id: req
    })
}

module.exports = findData