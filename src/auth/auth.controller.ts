import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport'

import { AuthService } from './auth.service'
import { User } from '../user/user.entity'

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {

  }


  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request) {
    const user = req.user as User;
    return this.AuthService.generateJWT(user);
  }
}
