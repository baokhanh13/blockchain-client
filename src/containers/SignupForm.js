import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '../components';
import { useDispatch } from 'react-redux';
import { signup } from '../store/wallet';

const SignupForm = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit, formState, errors } = useForm();

	const { isDirty } = formState;

	const onSubmit = (data) => {
		dispatch(signup(data));
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Title>Register</Form.Title>
			<Form.Subtitle>Fill your password and then we will send you your private key</Form.Subtitle>
			<Form.Input
				id="password"
				name="password"
				placeholder="Password"
				type="password"
				register={register}
				required
			/>
			{errors.password && <Form.Error>Password is required</Form.Error>}
			<Form.Button bgColor="#8e24aa" disabled={!isDirty}>
				Register
			</Form.Button>
			<Form.Bottom>
				<Form.Link to="/login">Login</Form.Link>
			</Form.Bottom>
		</Form>
	);
};

export default SignupForm;
