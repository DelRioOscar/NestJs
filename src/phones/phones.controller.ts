import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { PhoneDto } from './dtos/phone.dto';
import { PhonesService } from './phones.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('phones')
export class PhonesController {

    constructor(private phonesService: PhonesService) { }

    @Get()
    findAll(@Request() req) {
        return this.phonesService.findAll(req.user.id);
    }

    @Post()
    create(@Body() phoneDto: PhoneDto, @Request() req) {
        return this.phonesService.create(phoneDto, req.user.id);
    }

}
