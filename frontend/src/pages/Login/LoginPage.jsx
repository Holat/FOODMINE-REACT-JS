import classes from "./loginPage.module.css";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [params] = useSearchParams();
  const returnUrl = params.get("returnUrl");

  useEffect(() => {
    if (!user) return;
    returnUrl ? navigate(returnUrl) : navigate("/");
  }, [user]);

  const submit = async ({ email, password }) => {
    console.log("form was submitted", email, password);
    await login(email, password);
  };

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title={"Login"} />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type={"email"}
            label={"Email"}
            {...register("email", {
              required: true,
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                message: "Email Is Not valid",
              },
            })}
            error={errors.email}
          />
          <Input
            type={"password"}
            label={"Password"}
            {...register("password", {
              required: true,
            })}
            error={errors.password}
          />
          <Button type={"submit"} text={"Login"} />
          <div className={classes.register}>
            New user? &nbsp;
            <Link to={`/register${returnUrl ? "?returnUrl=" + returnUrl : ""}`}>
              Register Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
