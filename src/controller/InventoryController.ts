import { Inventory } from "../entity/Inventory";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { DataSource, getRepository } from "typeorm";
import axios, { AxiosResponse } from 'axios';

export default class InventroyController {
    constructor() {
        this.create = this.create.bind(this);
    }
    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const config = {
                headers: {
                    Accept: '*/*',
                    Authorization: "Bearer Bearer 48c9d52c-cfd2-33c4-1ffb-bd7e026e0771"
                }
            }
            const url = " https://sandbox.dev.clover.com/v3/merchants/HBVBZZTDA2341/items?expand=tags&expand=categories&expand=taxRates&expand=modifierGroups&expand=itemStock&expand=options&expand=menuItem&orderBy=name%20ASC&limit=26"
            let result = await axios.get(url, config)
            // const datasource = 
            if (result) {
                // console.log(result.data.elements)
                let data = result.data.elements
                console.log(data, '26')
                data.forEach(async (element: any) => {
                    // console.log(element, 'element')
                    const data = AppDataSource.getRepository(Inventory)
                    const newData = new Inventory()
                    const findData = await AppDataSource.getRepository(Inventory).findOneBy({
                        Inventory_Id: element.id
                    })
                    // console.log(findData, 'jk')
                    if (findData) {
                        res.status(201).json({
                            message: 'Inventory with same Data already exsit'
                        })
                        return
                    }
                    newData.name = element.name;
                    newData.Inventory_Id = element.id;
                    newData.price = element.price;

                    // console.log(data, newData, '34')
                    await data.save(newData)
                    if (data) {
                        res.status(200).json({
                            message: "record inserted succesfully",
                            data: data
                        })
                        return
                    }
                }).catch((err: any) => { console.log(err) })
                return
            }
        } catch (err) {
            console.log(err)
        }
    }
}
