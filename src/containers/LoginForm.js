import React from 'react';
import { Form } from '../components';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/wallet';

const LoginForm = () => {
	const { register, handleSubmit, formState, errors } = useForm();
	const { isDirty } = formState;
	const dispatch = useDispatch();

	const wallet = useSelector(state => state.wallet);

	const onSubmit = (data) => {
		dispatch(login(data));
	};
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Title>Login</Form.Title>
			{wallet.errorMsg && <Form.Error>{wallet.errorMsg}</Form.Error>}
			<Form.Input
				id="privatekey"
				type="text"
				placeholder="PrivateKey"
				name="privateKey"
				register={register}
				required
			/>
			{errors.email?.type === 'required' && (
				<Form.Error>PrivateKey is required</Form.Error>
			)}
			<Form.Input
				id="password"
				type="password"
				placeholder="Password"
				name="password"
				register={register}
				required
			/>
			{errors.password && <Form.Error>Password is required</Form.Error>}
			<Form.Button bgColor="#8e24aa" type="submit" disabled={!isDirty}>
				Login
			</Form.Button>
			<Form.Bottom>
				<Form.Link to="/register">Register</Form.Link>
			</Form.Bottom>
		</Form>
	);
};

export default LoginForm;
