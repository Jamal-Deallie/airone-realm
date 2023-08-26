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

export const RegisterSchema = z
  .object({
    username: z
      .string()
      .min(1, 'The email is required.')
      .email({ message: 'The email is invalid.' }),
    firstName: z.string().min(1, 'The first name is required.'),
    lastName: z.string().min(1, 'The last name is required.'),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ['confirmPassword'],
  });

export type RegisterType = z.infer<typeof RegisterSchema>;
