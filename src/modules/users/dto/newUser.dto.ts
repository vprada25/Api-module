import { isString, isBoolean, isNumber } from "util";

import { IsString, IsBoolean, IsInt, IsNotEmpty, LENGTH, Length } from 'class-validator';


export class newUserDTO {

    @IsString()
    @IsNotEmpty()
    @Length(5)
    "username": string;

    @IsBoolean()
    "state": boolean;

    @IsInt()
    "role": number;

}