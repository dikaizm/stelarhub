import { ReactNode } from "react";

type TextInputProps = {
    label?: string;
    children?: ReactNode;
    placeholder?: string;
    id: string;
    input: {
        value: string;
        setValue(field: string, value: string): void;
        field: string;
    }
    type?: string;
    response?: {
        type: string;
        value: string;
    }
}

export default function TextInput({ label, children, placeholder, id, input, type = "input", response }: TextInputProps) {
    const { value, setValue, field } = input

    return (
        <div className="input-box">
            <label htmlFor={id}>{label || children}</label>

            {type === "input" ? (
                <input
                    className={response?.type === "error" ? "error" : "default"}
                    type="text"
                    placeholder={placeholder}
                    name={id}
                    id={id}
                    value={value}
                    onChange={(e) => setValue(field, e.target.value)} />
            ) : type === "textarea" ? (
                <textarea
                    className={response?.type === "error" ? "error" : "default"}
                    placeholder={placeholder}
                    name={id}
                    id={id}
                    value={value}
                    onChange={(e) => setValue(field, e.target.value)}
                >{value}</textarea>
            ) : null}

            <div className={"response " +
                (response?.type === "error"
                    ? "error" : response?.type === "success" ? "success" : "")}>
                <span>{response?.value}</span>
            </div>
        </div>
    )
}
