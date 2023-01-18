import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Inventory {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Inventory_Id: String

    @Column()
    name: string

    @Column()
    price: string

    // @Column()
    // age: number

    @Column()
    @CreateDateColumn()
    createdAt: Date;
    static findOne: any
}
