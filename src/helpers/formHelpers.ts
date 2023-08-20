import { z } from 'zod';

// The Zod Login Schema for Front End Validation
export const LoginSchema = z.object({
  username: z
    .string()
    .min(1, 'The email is required.')
    .email({ message: 'The email is invalid.' }),
  password: z.string().min(6),
});

// Infer the TS type according to the zod schema.
export type LoginType = z.infer<typeof LoginSchema>;
