import { Input, Button, Typography } from "@material-tailwind/react";
import fastLoginImage from "../assets/img/fast-login-image.png";
import logo from "../assets/img/fast-logo.svg";

const Login = () => {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <section className="m-8 flex gap-4">
          <div className="w-full lg:w-3/5 mt-24">
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <img className="flex " src={logo} />
              </div>
              <Typography variant="h5" className="font-bold text-FAST-Text">
                Portal de Administración
              </Typography>
              <Typography variant="h5" className="font-bold text-FAST-Text">
                Inicia sesión para continuar
              </Typography>
            </div>
            <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="h6"
                  className="-mb-3 font-bold text-FAST-Text"
                >
                  Correo Electrónico
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  className="-mb-3 font-medium font-bold text-FAST-Text"
                >
                  Contraseña
                </Typography>
                <Input
                  size="lg"
                  type="password"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Button size="lg" className="mt-6 bg-FAST-Orange" fullWidth>
                Iniciar Sesión
              </Button>
            </form>
          </div>
          <div className="w-2/5 h-full hidden lg:block">
            <img
              src={fastLoginImage}
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
