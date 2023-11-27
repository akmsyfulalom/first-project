import { z } from "zod";

const userNameZodValidationSchema = z.object({
    firstName: z.string().min(1).max(20).refine(value => /^[A-Za-z]+$/.test(value), {
      message: "First name should only contain letters"
    }),
    middleName: z.string().optional(),
    lastName: z.string().min(1).refine(value => /^[A-Za-z]+$/.test(value), {
      message: "Last name should only contain letters"
    }),
  });
  
  const guardianZodValidationSchema = z.object({
    fatherName: z.string().min(1),
    fatherOccupation: z.string().min(1),
    fatherContactNo: z.string().min(1),
    motherName: z.string().min(1),
    motherOccupation: z.string().min(1),
    motherContactNo: z.string().min(1),
  });
  
  const localGuardianZodValidationSchema = z.object({
    name: z.string().min(1),
    occupation: z.string().min(1),
    contactNo: z.string().min(1),
    address: z.string().min(1),
  });
  
  const studentZodValidationSchema = z.object({
    id: z.string().min(1),
    password: z.string().max(20),
    name: userNameZodValidationSchema,
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string().min(1),
    email: z.string().email(),
    contactNumber: z.string().min(1),
    emergencyContactNo: z.string().min(1),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'O+', 'O-']).optional(),
    presentAddress: z.string().min(1),
    permanentAddress: z.string().min(1),
    guardian: guardianZodValidationSchema,
    localGurdian: localGuardianZodValidationSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(['active', 'blocked']).default('active'),
  });


  export const StudentZodValidationSchema = studentZodValidationSchema;
