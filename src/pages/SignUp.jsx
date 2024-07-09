import { useForm } from "react-hook-form"
import { useSignup } from "../features/auth/useSignup";

function SignUp() {
    const {signup, isLoading} = useSignup();
    const {register, formState, getValues, handleSubmit, reset} = useForm();

    function onSubmit({fullName, email, password}) {
        signup({fullName, email, password},
            {
                onSettled: reset,
            }
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-stone-200 px-6 py-8">
            <label htmlFor="fullName">Повне ім'я</label>
            <input id='fullName' type="text" {...register('fullName', {
                required: 'This field is required'
            })}/>

            <label htmlFor="email">Електронна адреса</label>
            <input id="email" type="email"  {...register('email', {
                required: 'This field is required',
                pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: 'Please enter a valid email address'
                }
            })}/>

            <label htmlFor="password">Пароль</label>
            <input id='password' type="password"  {...register('password', {
                required: 'This field is required',
                minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long'
                },
                
            })}/>

            <label htmlFor="confirmPassword">Підтвердження паролю</label>
            <input id='confirmPassword' type="password" {...register('confirmPassword', {
                required: 'Confirm your password ',
                validate: (value) => value === getValues().password || 'password need to match'
                })}/>

                <button>Submit</button>
            
        </form>
    )
}

export default SignUp
