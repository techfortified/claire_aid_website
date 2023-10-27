import connection from "@/db";

export async function POST(request) {
    try {
        const {username, password} = request.body
        const result = await connection.query("SELECT * FROM users WHERE username = ? AND password = ?", [username,password])
        const data = result[0]
        if(data.length === 0) return Response.json("Invalid username or password", {status: 401})
        return Response.json(data[0])
    } catch (error) {
        return Response.json("Server error, Try again later", {status: 500})
    }
}
