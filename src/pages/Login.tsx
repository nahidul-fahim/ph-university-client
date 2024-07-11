import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";



const Login = () => {


    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { handleSubmit, register } = useForm({
        defaultValues: {
            userId: "A-0001",
            password: "admin123"
        }
    });

    const [login] = useLoginMutation();


    // handle submission for login
    const onSubmit = async (data: FieldValues) => {

        const toastId = toast.loading("Logging in")
        try {


            const userInfo = {
                id: data?.userId,
                password: data?.password
            }
            const res = await login(userInfo).unwrap();
            const user = verifyToken(res.data.accessToken) as TUser;

            dispatch(setUser({
                user: user,
                token: res.data.accessToken
            }))
            toast.success("Logged in", { id: toastId, duration: 2000 })
            navigate(`/${user.role}/dashboard`)
        }
        catch (error) {
            toast.error("Something went wrong", { id: toastId, duration: 2000 })
        }
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID: </label>
                <input type="text" id="id" {...register('userId')} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" {...register('password')} />
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;