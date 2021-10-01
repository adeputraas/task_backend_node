import { UserActivity } from "../../entities/UserActivity";
import { IUserActivityRepository } from "../../repositories/IUserActivityRepository";
import { KnexUserActivityRepository } from "../../repositories/implementations/KnexRepository/KnexUserActivityRepository";
import { InsertUserActivityDTO, InsertUserActivityDTOSchema } from "./DTO";

export class InsertUserActivityUseCase {
  constructor(private userActivityRepository: IUserActivityRepository) {}

  public async execute(props: InsertUserActivityDTO) {
    try {
      const dto = await InsertUserActivityDTOSchema.parseAsync(props);
      const userActivity = UserActivity.create({ endpoint: dto.endpoint, request: dto.request, dateTime: dto.dateTime });
      await this.userActivityRepository.create(userActivity);
    } catch (error) {
      throw error;
    }
  }
}
