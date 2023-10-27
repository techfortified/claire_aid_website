import { AuthSchema } from "@/schema"

export const validateAuthInput = (payload) =>{
    try {
        const result = AuthSchema.parse(payload)
        return {isError: false, message: "success", data: result}
      } catch (error) {
        const issues = error?.issues
        const message = issues?.map(issue => issue.message)?.join("\r\n")
        return {isError: true, message, data: null}
      }
}