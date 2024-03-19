import { FormRegisterPlayer } from "../components"

export const CreatePlayerPage = () => {
  return (
    <div className="bg-custom-blue-100 container justify-center items-center rounded-xl h-auto xl:w-2/5 md:w-3/4 w-full">
      <div className="md:p-5 p-3">
        <h1 className="text-center text-3xl font-bold text-white">SignUp</h1>
        <h3 className="text-center text-lg font-bold text-black">Register your details to create an account.</h3>
        <div className="flex items-center mb-3">
          <hr className="h-0 border-b border-solid border-custom-blue-700 grow" />
          <p className="mx-4 text-white">Register</p>
          <hr className="h-0 border-b border-solid border-custom-blue-700 grow" />
        </div>
      </div>
      <div className='items-center w-full'> 
        <FormRegisterPlayer/>
      </div>
    </div>
  )
}
