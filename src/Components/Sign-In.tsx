import './sign-in.css'

import google from "./images/google-icon 1.png";
import apple from './images/apple 1.png'


import {SubmitHandler, useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';

const schema = z.object({
    email: z.string().email({ message: "Email should be valid" }),
    password: z.string().min(5, { message: "Password must have at least 5 characters" }),
});

type FormFields = z.infer<typeof schema>;

function SignIn() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = data => {
        console.log(data);
    }

    return (
        <div className={'sign-in-container'}>
            <div className={'left-container'}>
                <h1 className={'board-title'}>Board.</h1>
            </div>
            <div>
                <div className={'right-container'}>
                    <div className={'form'}>
                        <h1>Sign In</h1>
                        <span className={'info'}>Sign in to your account</span><br/>
                        <div className={'two-btn'}>
                            <button className={'google-btn'}>
                                <img className={'img'} src={google} alt="logo"/>
                                <span>Sign in with Google</span>
                            </button>
                            <button className={'apple-btn'}>
                                <img className={'img'} src={apple} alt={'apple'}/>
                                <span>Sign in with Apple</span>
                            </button>
                        </div>
                        <form className={'field'} onSubmit={handleSubmit(onSubmit)}>
                            <div className={'email-field'}>
                                <span>Email address</span><br/>
                                <input {...register('email',{
                                    required:"Email is required",
                                    validate: value => {
                                        if(!value.includes('@')) {
                                            return'Email should be valid'
                                        }
                                        return  true
                                    }
                                })} placeholder={'enter email'}/><br/>
                                {
                                    errors.email && (
                                        <span className={'error-display'}>{errors.email.message}</span>
                                    )
                                }
                            </div>
                            <div className={'password-field'}>
                                <span>Password</span><br/>
                                <input {...register('password',{
                                    required:"Password is required",
                                    minLength: {
                                        value: 5,
                                        message: 'Password must have at least 5 chars'
                                    }
                                })} type={'password'}/>
                                <br/>
                                {
                                    errors.password && (
                                        <span className={'error-display'}>{errors.password.message}</span>
                                    )
                                }
                            </div>
                            <span className={'forget'}>Forget password?</span>
                            <button className={'btn-sign-in'}>Sign In</button>
                        </form>
                        <div className={'last'}>
                            <h5>Don't have an account?<span> Register here</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SignIn;