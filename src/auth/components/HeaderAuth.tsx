import { Link, useLocation } from "react-router-dom"

export const HeaderAuth = () => {
  const location = useLocation()

  const routeLocation = location.pathname.split("/")[2];

  const customMessage = {
    signIn: "Inicia sesion para jugar en este juego con tus amigos!",
    signUp: "Registrate para participar en este juego con tus amigos!",
    resetPassword: "Recupera tu contraseña para poder jugar en este juego con tus amigos!"
  }

  const customLinks = {
    signIn: {
      route: "/auth/sign-in",
      label: "SignIn"
    },
    signUp: {
      route: "/auth/sign-up",
      label: "SignUp"
    },
    resetPassword: {
      route: "/auth/reset-password",
      label: "Reset password  "
    }
  }

  return (
  <header className="bg-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Pasanaku</h1>

          <p className="mt-1.5 text-sm text-custom-gray-700">
            {
              routeLocation === "sign-up" ? customMessage.signUp
              : routeLocation === "sign-in"? customMessage.signIn
              : routeLocation === "reset-password" && customMessage.resetPassword
            }
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <Link
            to={
              (routeLocation === "sign-up") ? customLinks.signIn.route
              : (routeLocation === "sign-in")? customLinks.signUp.route
              : customLinks.signUp.route
            }
            className=" px-5 py-3 text-sm font-medium text-custom-blue-500 transition underline"
            type="button"
          >
            {
              (routeLocation === "sign-up") ? customLinks.signIn.label
              : (routeLocation === "sign-in" || routeLocation === "reset-password") && customLinks.signUp.label
            }
          </Link>

          <Link
            to={
              routeLocation === "reset-password"? customLinks.signIn.route
              : customLinks.resetPassword.route
            }
            className=" px-5 py-3 text-sm font-medium text-custom-blue-500 transition underline"
            type="button"
          >
            {
              (routeLocation === "reset-password")? customLinks.signUp.label
              : customLinks.resetPassword.label
            }
          </Link>
        </div>
      </div>
    </div>
  </header>
)
}
