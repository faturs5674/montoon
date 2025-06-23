import { useEffect } from "react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };
    return (
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div className="fixed top-[-50px] hidden lg:block">
                <img
                    src="/images/signup-image.png"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                    alt=""
                />
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/moonton-white.svg" alt="" />
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Sign Up
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br />
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]" onSubmit={submit}>
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel value={"Name"} />
                                <TextInput
                                    type="text"
                                    name="name"
                                    placeholder="your fullname"
                                    isFocused={true}
                                    onChange={handleOnChange}
                                    required
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel value={"Email Address"} />
                                <TextInput
                                    type="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    onChange={handleOnChange}
                                    required
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel value={"Password"} />
                                <TextInput
                                    type="password"
                                    name="password"
                                    placeholder="Your Password"
                                    onChange={handleOnChange}
                                    required
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel value={"Confirm Password"} />
                                <TextInput
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    placeholder="Confirm Password"
                                    onChange={handleOnChange}
                                    required
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <PrimaryButton
                                type="submit"
                                disabled={processing}
                                children={
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                }
                            />

                            <Link href={route("login")}>
                                <SecondaryButton
                                    children={
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    }
                                />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
