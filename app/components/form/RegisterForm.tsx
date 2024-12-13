'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from "zod";

const FormSchema = z.object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
            message:
                'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number'
        }),
    confirmPassword: z.string().min(1, 'Password confirm is required!'),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match!'
});

const RegisterForm = () => {
    const router = useRouter();
    const { handleSubmit, register } = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    });

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        console.log(values)
        const res = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.username,
                email: values.email,
                password: values.password
            })
        }
        );

        if (res.ok) {
            router.push('/register')
        } else {
            console.error('Registration failed')
        }
    }

    return (
        <div className='card flex justify-center min-h-screen items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[1.5rem] border-white border-2 p-6 rounded-md'>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input className='text-black' type="text" {...register('username')} placeholder='example123' />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input className='text-black' type="email" {...register('email')} placeholder='example@gmail.com' />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input className='text-black' type="password" {...register('password')} placeholder='**********' />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input className='text-black' type="password" {...register('confirmPassword')} placeholder='**********' />
                </div>
                <button type="submit" className='bg-blue-500'>Submit</button>
            </form>
        </div>
    )
}

export default RegisterForm;