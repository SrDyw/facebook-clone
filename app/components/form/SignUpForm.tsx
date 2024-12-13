import { z } from "zod";

const FormSchema = z.object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirm is required!'),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match!'
});

const SignUpForm = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    });

    const onSubmit = (values: z.infer<typeof FormSchema>) => {
        console.log(values)
    }
}