import dbConnection from "@/db";
import bcrypt from "bcrypt";

export const createUser = async({username, password}) => {
    try {
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt)
        const dbConn = await dbConnection()
        const result =  await dbConn.execute("SELECT * FROM users WHERE username = ?", [username])
        const data = result[0]
        if(data.length > 0) return {data: null, message: "User already exists, try another username", isError: true}
        await dbConn.execute("INSERT INTO users", {username, password: hashedPassword})
        return {data: {username, password}, message: "User inserted successfully", isError: false}
    } catch (error) {
        return {data: null, message: "Error occurred trying to process request, try again later", isError: true}
    }
}