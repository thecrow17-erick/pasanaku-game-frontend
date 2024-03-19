import {pasanakuApi} from '@/api'
import { ResponseSignUp } from '@/auth/interface';


export const createPlayerQuery = async(body: FormData): Promise<ResponseSignUp | undefined> => {
  try {
    const {data,status} = await pasanakuApi.post<ResponseSignUp>("/player",body);
    return {
      ...data,
      status
    };
  } catch (err) {
    console.log(err);
  }
}