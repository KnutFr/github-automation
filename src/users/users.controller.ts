import {Controller, Get} from '@nestjs/common'
import { User as UserModel } from '@prisma/client';
import {UsersService} from "./users.service"

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
    ) {}
    @Get('user')
    async getPublishedPosts(): Promise<UserModel[]> {
        return this.userService.users({});
    }
}
