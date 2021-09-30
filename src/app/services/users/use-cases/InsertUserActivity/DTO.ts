import { z } from "zod";

export const InsertUserActivityDTOSchema = z.object({
    endpoint: z.string(),
    request: z.object({
      title: z.string(),
    }),
    dateTime: z.date(),
});

export type InsertUserActivityDTO = z.infer<typeof InsertUserActivityDTOSchema>;