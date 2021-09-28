import Joi from "joi";

export class ValidatorMovie {
  constructor() {}

  async validateMovie(params: any) {
    const schema = Joi.object({
      title: Joi.string(),
      year: Joi.string(),
      plot: Joi.string(),
      response: Joi.string(),
    });

    try {
      const response = await schema.validateAsync(params);
      return response;
      
    } catch (error) {}
  }
}
