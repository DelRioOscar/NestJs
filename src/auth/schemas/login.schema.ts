import * as Joi from '@hapi/joi';

export const loginSchema = Joi.object({
    email: Joi.string().min(10).message('Correo Electrónico: debe cumplir al menos 10 caracteres')
    .max(30).message('Correo electrónico: no debe pasar los 30 caracterés'),

    password: Joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'))
    .message('Contraseña: Minimo 8 caracteres, la ultima palabra en mayuscula, al menos una minuscula, un número y un caracter')
});