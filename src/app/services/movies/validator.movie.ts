import Joi from "joi";
export class ValidatorMovie {
  constructor() {}

  //TODO: CHECK LAGI VALIDATORNYA
  async validateMovie(query: any) {
    const schema = Joi.object({
      title: Joi.string().required(),
      year: Joi.string().required(),
      plot: Joi.string().allow("full", "short").required(),
      response: Joi.string().allow("json", "xml").required(),
    });

    try {
      const response = await schema.validateAsync(query);
      return response;
    } catch (error) {}
  }

  async validateDetailMovie(query: any) {
    const schema = Joi.object({
      id: Joi.string().required(),
      plot: Joi.string().allow("full", "short").required(),
      response: Joi.string().allow("json", "xml").required(),
    }).required();

    try {
      const response = await schema.validateAsync(query);
      return response;
    } catch (error) {}
  }
}
