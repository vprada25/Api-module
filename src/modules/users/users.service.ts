import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, Role } from 'src/entities';
import { Repository } from 'typeorm';
import { newUserDTO } from './dto/newUser.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    async getUsers() : Promise<User[]>{
        return await this.userRepository.find({relations: ["role"]});
    }

    //sin dto
    async createUser(data : newUserDTO): Promise<User>{
        let user = new User();
        user.username = data.username;
        user.role = new Role()
        user.role.idRole = data.role;
        user.state = true;
        return await this.userRepository.save(user);
      }

    //con dto data transfer object
      
      
    
}
