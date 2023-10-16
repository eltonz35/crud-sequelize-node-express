import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('Products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: number;

    @Column()
    color: string;

    @Column()
    size: string

}