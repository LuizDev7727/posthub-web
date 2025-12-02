import { z } from "zod";

export const createOrganizationSchema = z.object({
  name: z.string(),
  logo: z.file().optional(),
});

export type CreateOrganizationFormType = z.infer<
  typeof createOrganizationSchema
>;
