import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button
} from "@material-tailwind/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase.config';
import { useForm } from "react-hook-form";

export default function Register() {
    let navigate = useNavigate();

    const registerEmailRef = useRef(null);
    const registerPasswordRef = useRef(null);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const registerEmail = (data) => {

        createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password)
            .then((emailSignUp) => {
                // console.log({ 'data sign up => ': emailSignUp })
                alert('Silahkan login!')
                navigate('/login')
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className="container mx-auto pt-10">
            <Card className="w-96 mt-10 m-auto">
                <CardBody className="flex flex-col gap-4">
                    <h1 className="font-bold text-3xl text-center">Sign Up</h1>
                    <form onSubmit={handleSubmit(registerEmail)}>
                        <Input label="Email" type='email' size="lg" ref={registerEmailRef}
                            {...register('email', { required: true })} error={errors.email && true}
                        />
                        <br />
                        <Input label="Password" type='password' size="lg" ref={registerPasswordRef}
                            {...register('password', { required: true })} error={errors.password && true}
                        />
                        <Button variant="gradient" type="submit" size="lg" className="mt-6" fullWidth>
                            {/* onClick={registerEmail} */}
                            Sign Up
                        </Button>
                    </form>
                </CardBody>
                <CardFooter className="pt-0">
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Already have an account?
                        <Typography
                            as="a"
                            onClick={() => navigate('/login')}
                            variant="small"
                            color="blue"
                            className="ml-1 cursor-pointer font-bold hover:opacity-75"
                        >
                            Sign in
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
}