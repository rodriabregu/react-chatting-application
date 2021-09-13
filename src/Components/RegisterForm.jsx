import axios from 'axios'
import { useForm } from "react-hook-form"

const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = data => {
        const config = {
            method: 'post',
            url: 'https://api.chatengine.io/users/',
            headers: {
                'PRIVATE-KEY': '{{920abdcb-5ac4-4728-af37-8ab56cc100f0}}'
            },
            data : data
        };
        localStorage.setItem('username', data.username)
        localStorage.setItem('password', data.secret)
        axios(config)
        .then(function (response) {
        console.log(JSON.stringify('response post', response.data));
        })
        .catch(function (error) {
        console.log('error', error);
        });
        reset()
        window.location.reload();
    };

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
                <label htmlFor="first_name">First name</label>
                <input id='first_name' type="text" placeholder="Fort (example)" {...register("first_name", {
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
                {errors.first_name && <span role="alert">{errors.first_name.message}</span>}
            </div>
            <div>
                <label htmlFor="last_name">Last name</label>
                <input id='last_name' type="text" placeholder="Fort (example)" {...register("last_name", {
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
                {errors.last_name && <span role="alert">{errors.last_name.message}</span>}
            </div>
            <div>
                <label htmlFor="secret">Password</label>
                <input
                    id="secret"
                    placeholder='pepito123 (example)'
                    type="password"
                    {...register("secret", {
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
                {errors.secret && <span role="alert">{errors.secret.message}</span>}
            </div>
            <input className='button-r' type="submit" />
        </form>
    )
}

export default RegisterForm;