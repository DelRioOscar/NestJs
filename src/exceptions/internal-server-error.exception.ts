import { HttpException, HttpStatus } from "@nestjs/common";

export class InternalServerError extends HttpException {
    constructor() {
        super('Error de Servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
}