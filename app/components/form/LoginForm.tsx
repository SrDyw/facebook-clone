'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from "zod";

const FormSchema = z.object({
    username: z.string().min(1, 'Username is required').max(100),
    password: z
        .string()
        .min(1, 'Password is required')
})

const LoginForm = () => {
    const router = useRouter();
    const { handleSubmit, register } = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            password: '',
        }
    });

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        const loginData = await signIn('credentials', {
            username: values.username,
            password: values.password
        });
        console.log(values)
    }

    return (
        <div className='card flex justify-center min-h-screen items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[1.5rem] border-white border-2 p-6 rounded-md'>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input className='text-black' {...register('username')} type='text' placeholder='johndoe0102' />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input className='text-black' {...register('password')} type="password" placeholder='**********' />
                </div>
                <button type="submit" className='bg-blue-500'>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;