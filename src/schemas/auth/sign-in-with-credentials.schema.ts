import { z } from 'zod'

export const signInWithCredentialsSchema = z.object({
  email: z.email(),
  password: z.string()
})

export type SignInWithCredentialsFormType = z.infer<typeof signInWithCredentialsSchema>