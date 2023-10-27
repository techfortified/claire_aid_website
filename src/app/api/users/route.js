import dbConnection from "@/db";
import bcrypt from "bcrypt";


export async function POST(request) {
    try {
        const salt = 10;
        const {username, password} = await request.json()
        const hashedPassword = await bcrypt.hash(password, salt)
        const dbConn = await dbConnection()
        const result =  await dbConn.execute("SELECT * FROM users WHERE username = ?", [username])
        const data = result[0]
        if(data.length > 0) return Response.json("User already exists", {status: 401})
        await dbConn.query("INSERT INTO users SET ?", {username: username, password: hashedPassword})
        return Response.json({message: "User inserted successfully"})
    } catch (error) {
        return Response.json("Server error, Try again later", {status: 500})
    }
}

