/* eslint-disable @next/next/no-img-element */
import { WrapperLogin } from './styles';
import TextInput from '@/components/shared/input/text-login/text.component';
import BrandLogo from '@/app/assets/logo.svg';
import { useState, useEffect } from 'react';
import { login } from '@/app/store/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import Spinner from '@/components/shared/loader/loader.component';

const Login = () => {
  const { 'auth.AccessToken': token } = parseCookies();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoading, message } = useAppSelector((state) => state.auth);
  const [payload, setPayload] = useState({
    strategy: 'local',
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(login(payload));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      router.replace('/menus');
    }
  }, [router, token]);

  return (
    <WrapperLogin className="h-[492px] flex flex-col justify-center items-center">
      <img
        src={BrandLogo}
        className="img-fluid h-36 w-36 rounded-circle"
        alt="img"
      />
      <form
        className="flex flex-col w-full px-10 gap-4 mt-5"
        onSubmit={handleSubmit}
      >
        <TextInput
          type="text"
          label="Email"
          value={payload.email}
          name="email"
          handleChange={handleChange}
          required={true}
        />
        <TextInput
          type="password"
          label="Password"
          value={payload.password}
          name="password"
          handleChange={handleChange}
          required={true}
        />
        <label className="error ">{message}</label>
        <button className="w-full" disabled={isLoading}>
          {isLoading && <Spinner />} Sign In
        </button>
        <span className="forgot cursor-pointer mt-9">Forget Password?</span>
      </form>
    </WrapperLogin>
  );
};

export default Login;
