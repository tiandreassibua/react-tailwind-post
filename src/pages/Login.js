import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button
} from "@material-tailwind/react";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import GoogleButton from 'react-google-button';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../config/firebase.config';
import { useForm } from "react-hook-form";

export default function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const loginEmailRef = useRef(null);
  const loginPasswordRef = useRef(null);

  const loginGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((signAuth) => {
        console.log({ 'data =>': signAuth })
        setIsAuth(true);
        alert('Logged in!');
        navigate('/');
      }).catch((error) => {
        alert('Login failed!');
        console.log('Login error');
        console.log(error.message);
      })
  }

  const {register, handleSubmit, formState:{errors}} = useForm();
  const loginEmail = (data) => {
    // e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      data.email,
      data.password)
      .then((emailSignIn) => {
        alert('Logged in!')
        navigate('/')
      }).catch((error) => alert(error.message));
  }
  return (
    <div className="container mx-auto pt-10">
      <Card className="w-96 mt-10 m-auto">
        <CardBody className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl text-center">Sign In</h1>
          <form onSubmit={handleSubmit(loginEmail)}>
            <Input label="Email" type='email' size="lg" ref={loginEmailRef}
            {...register('email', { required: true })} error={errors.email && true}
            />
            <br />
            <Input label="Password" type='password' size="lg" ref={loginPasswordRef}
            {...register('password', { required: true })} error={errors.password && true}
            />
            <Button type="submit" className='mt-6' variant="gradient" size="lg" fullWidth>
              Sign In
            </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography variant="small" className="flex justify-center font-bold">
            Or
          </Typography>
          <GoogleButton onClick={loginGoogle} className='m-auto mt-4' />
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <Typography
              as="a"
              onClick={() => navigate('/register')}
              variant="small"
              color="blue"
              className="ml-1 cursor-pointer font-bold hover:opacity-75"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}