import { useForm } from "react-hook-form";

const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => (console.log(data), reset());

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div><h1>Login an account</h1></div>
            <div>
                <label htmlFor="username">Username</label>
                <input id='username' type="text" placeholder="Fort24 (example)" {...register("username", {
                    required: "required",
                    minLength: {
                        value: 3,
                        message: "Min length is 3."
                    },
                    maxLength: {
                        value: 16,
                        message: "Max length is 16."
                    }
                }
                )} />
                {errors.username && <span role="alert">{errors.username.message}</span>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    placeholder='pepito123 (example)'
                    type="password"
                    {...register("password", {
                        required: "required",
                        minLength: {
                            value: 3,
                            message: "Min length is 3."
                        },
                        maxLength: {
                            value: 24,
                            message: "Max length is 24."
                        }
                    })}
                />
                {errors.password && <span role="alert">{errors.password.message}</span>}
            </div>
            <input className='button-r' type="submit" />
        </form>
    )
}

export default RegisterForm;