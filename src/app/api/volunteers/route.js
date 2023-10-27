import dbConnection from "@/db";

export async function GET(request) {
    try {
        const requestHeaders = new Headers(request.headers)
        let user = requestHeaders.get('user')
        if(!user) return Response.json("You are not authorised to access this resource, login to continue", {status: 403})
        user = JSON.parse(user)
        const dbConn = await dbConnection()
        const result = await dbConn.execute("SELECT * FROM volunteers")
        const data = result[0]
        return Response.json({message: data.length === 0 ? "No user found": "Success", data}, {status: 200})
    } catch (error) {
        return Response.json("Server error, Try again later", {status: 500})
    }
}