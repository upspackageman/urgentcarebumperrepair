import * as yup from "yup";

export const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    phone: yup.number().positive().integer().required(),
    make: yup.string().required(),
    model: yup.string().required(),
    
  }).required();

export type FormData = yup.InferType<typeof validationSchema>;
 
  