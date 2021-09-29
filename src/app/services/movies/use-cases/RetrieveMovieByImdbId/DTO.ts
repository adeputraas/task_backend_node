import { z } from "zod";

export const RetrieveMovieByImdbIdDTOSchema = z.object({
  id: z.string(),
  plot: z.union([z.literal("short"), z.literal("full")]),
  response: z.union([z.literal("json"), z.literal("xml")]),
});

export type RetrieveMovieByImdbIdDTO = z.infer<typeof RetrieveMovieByImdbIdDTOSchema>;