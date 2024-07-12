import { Input } from "antd";
import { Controller } from "react-hook-form";

type TFormInput = {
    type: string;
    name: string;
    label?: string;
}


const PHFormInput = ({ type, name, label }: TFormInput) => {

    return (
        <div style={{ marginBottom: "20px" }}>
            {label ?
                <label>{label}</label>
                :
                null
            }
            <Controller
                name={name}
                render={({ field }) =>
                    <Input
                        {...field}
                        type={type}
                        id={name}
                    />}
            />
        </div>
    );
};

export default PHFormInput;