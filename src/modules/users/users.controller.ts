import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities';
import { newUserDTO } from './dto/newUser.dto';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService){}

    @Get()
    async getUsers() : Promise<User[]>{
        return await this.userService.getUsers();
    }

    @Post()
    async createUser(@Body() data: newUserDTO) : Promise<User>{
        return await this.userService.createUser(data)
    }

    
}
















//solo el controlador get post put delete.