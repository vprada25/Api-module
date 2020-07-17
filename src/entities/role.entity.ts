import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    idRole: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

}