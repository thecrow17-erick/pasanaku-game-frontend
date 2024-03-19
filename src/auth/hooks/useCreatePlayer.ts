import { createPlayerQuery } from "@/lib/query"
import { useMutation } from "@tanstack/react-query"

export const useCreatePlayer = () => {
  const mutation = useMutation({
    mutationFn: createPlayerQuery
  })
  return {
    ...mutation
  }
}
