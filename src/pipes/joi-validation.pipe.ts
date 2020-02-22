import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { Schema } from '@hapi/joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: Schema) { }

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    console.log(error.details);
    if (error) {
      throw new BadRequestException(error.details[0].message);
    }
    return value;
  }
}
