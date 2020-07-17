import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Role } from "./role.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    idUser: number;

    @Column('varchar')
    username: string;

    @Column('boolean')
    state: boolean;

    @ManyToOne(type => Role)
    @JoinColumn({ name: 'idRole' })
    role: Role

}