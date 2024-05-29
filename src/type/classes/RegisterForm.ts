import Register from "@/type/classes/Register";
export default class RegisterForm {
    email: string;
    fullName: string;
    username: string;
    password: string;

    static defaultValue(): Register {
        return {
            email: "",
            fullName: "",
            username: "",
            password: "",
        };
    }

    static toEntity(form: RegisterForm): Register {
        return {
            email: form.email,
            fullName: form.fullName,
            username: form.username,
            password: form.password,
        }
    }
}