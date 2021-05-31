import { Controller } from '@nestjs/common';
import {PostsService} from "../posts/posts.service"
import {UsersService} from "./users.service"

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
    ) {}

}
