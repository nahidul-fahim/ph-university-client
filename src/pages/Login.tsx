import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHFormInput from "../components/form/PHFormInput";



const Login = () => {


    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [login] = useLoginMutation();


    // default value - only for testing purpose

    const defaultValues = {
        userId: "A-0001",
        password: "admin123"
    }


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
        <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
            <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <PHFormInput type={"text"} name={"userId"} label={"ID"} />
                <PHFormInput type={"text"} name={"password"} label={"Password"} />
                <Button htmlType="submit">Login</Button>
            </PHForm>
        </Row>
    );
};

export default Login;