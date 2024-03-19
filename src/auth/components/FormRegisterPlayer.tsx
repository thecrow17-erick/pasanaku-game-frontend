import { ExtFile, FileInputButton, FileMosaic } from "@files-ui/react"
import { useState } from "react";
import {SubmitHandler, useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"

import { Button, Input } from "@/components/ui"
import { FormSignUp } from "../interface";
import { validationSignUp } from "../dto";
import { AlertError } from "@/components/alert";
import { useCreatePlayer } from "../hooks";


export const FormRegisterPlayer = () => {

  const {
    handleSubmit,
    register,
    formState:{
      errors
    }
  } = useForm<FormSignUp>({
    resolver: yupResolver(validationSignUp)
  });

  const createPlayer= useCreatePlayer()

  const [value, setValue] = useState<ExtFile>();

  const updateFiles = (incommingFiles:ExtFile[]) => {
    console.log("incomming extFiles", incommingFiles);
    setValue(incommingFiles[0]);
  };
  const removeFile = () => {
    setValue(undefined);
  };


  const onSubmit:SubmitHandler<FormSignUp> =(data)=>{
    const body = new FormData()

    body.append("file",value!.file!)
    body.append("email",data.email)
    body.append("name",data.username)
    body.append("ci",data.ci)
    body.append("password",data.password)
    body.append("address",data.address)

    createPlayer.mutate(body,{
      onSuccess(data) {
          console.log(data);
      },
    })
  }

  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="py-5 flex md:px-5 justify-center flex-col">
      <label>Username</label>  
      {
        errors.username && <AlertError message={errors.username.message!}/>
      }
      <Input
      type="text"
      placeholder="enter your username"
      {...register("username")}
      />

      <label>email</label>  
      {
        errors.email && <AlertError message={errors.email.message!}/>
      }
      <Input
      type="email"
      placeholder="enter your email"
      {...register("email")}
      />

      <label>Password</label>  
      {
        errors.password && <AlertError message={errors.password.message!}/>
      }
      <Input
      type="password"
      placeholder="enter your password"
      {...register("password")}
      />

      <label>CI</label>  
      {
        errors.ci && <AlertError message={errors.ci.message!}/>
      }
      <Input
      type="text"
      placeholder="enter your identification card"
      {...register("ci")}
      />

      <label>Address</label>  
      {
        errors.address && <AlertError message={errors.address.message!}/>
      }
      <Input
      type="text"
      placeholder="enter your address"
      {...register("address")}
      />

      <label>Photo</label>  
      <div>
        {
          value ? (
            <FileMosaic {...value} onDelete={removeFile} preview/>
          ) : (
            <FileInputButton color="#4A9aE9" maxFiles={1} accept="image/*" value={value ? [value] : []} onChange={updateFiles}  />
          )
        }
      </div>

      <div>
        <Button
          type="submit"
          disabled={!value}
          className="w-1/3 bg-custom-blue-900 my-5"
        >
          SignUp
        </Button>
      </div>
    </form>
  )
}
