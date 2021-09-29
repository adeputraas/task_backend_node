import { z } from "zod";

export const RetrieveMovieByImdbTitleDTOSchema = z.object({
  title: z.string(),
  year: z.number(),
  plot: z.union([z.literal("short"), z.literal("full")]),
  response: z.union([z.literal("json"), z.literal("xml")]),
});

export type RetrieveMovieByImdbTitleDTO = z.infer<typeof RetrieveMovieByImdbTitleDTOSchema>;