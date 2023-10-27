import { apiRoutes } from "@/constants";
import dbConnection from "@/db";
import { decryptValue, encryptValue, signJwt, verifyJwt } from "@/utils";
import { validateAuthInput } from "@/validators";
import bcrypt from "bcrypt";

  

const loginUser = async(body) => {
    try {
        // validate auth input
        const result = validateAuthInput(body)
        if(result.isError) return Response.json(result.message, { status: 400})
        const { username, password } = result.data
        // make db conection
        const dbConn = await dbConnection()
        const res =  await dbConn.execute("SELECT * FROM users WHERE username = ?", [username])
        const data = res[0]
        if(data.length === 0) return Response.json("Wrong username/password provided", {status: 401})
        if(data.length > 1) return Response.json("Invalid user credentials", {status: 401})
        const user = data[0]
        const isMatched = await bcrypt.compare(password, user.password)
        if(!isMatched) return Response.json("Wrong username/password credentials", {status: 401})
        const userId = encryptValue(user.id)
        const _user = {username: user.username, id: userId}
        const accessToken = await signJwt(_user, true)
        const refreshToken = await signJwt(_user, false)
        const date = new Date();
        const expires = new Date(date.setDate(date.getDate() + 7)).toUTCString()
        return Response.json({message: "Success", data: {..._user, accessToken, refreshToken}},{status: 200,headers: {
            "Set-Cookie": `c_r_a__t=${refreshToken}; Expires=${expires}; SameSite=Strict; Secure; HttpOnly; path=/`
        }})
    } catch (error) {
        console.log(error.message)
        return Response.json("Server error, Try again later", {status: 500})
    }
}

const refreshAccessToken = async(token) => {
    try {

        const res = await verifyJwt(token, false)
        if(res.isError) return Response.json("You are not authenticated, please login to continue", { status: 401})
        const currentUser = res.data
        const userId = parseInt(decryptValue(currentUser.id))
        const dbConn = await dbConnection()
        const result =  await dbConn.execute("SELECT * FROM users WHERE id = ? AND username = ?", [userId,currentUser.username])
        const data = result[0]
        if(data.length === 0) return Response.json("You are not authenticated, please login to continue", {status: 401})
        const user = data[0]
        const _userId = encryptValue(user.id)
        const _user = {username: user.username, id: _userId}
        const accessToken = await signJwt(_user, true)
        const refreshToken = await signJwt(_user, false)
        const date = new Date();
        const expires = new Date(date.setDate(date.getDate() + 7)).toUTCString()
        return Response.json({message: "Success", data: {accessToken, refreshToken,..._user}}, {status: 200,headers: {
            "Set-Cookie": `c_r_a__t=${refreshToken}; Expires=${expires}; SameSite=Strict; Secure; HttpOnly; path=/`
        }})
    } catch (error) {
        return Response.json("Server error, Try again later", {status: 500})
    }
}

const logoutUser = async() => {
    try {
        return Response.json({message: "User logged out"}, {status: 200,headers: {
            "Set-Cookie": `c_r_a__t=null; SameSite=Strict; Secure; HttpOnly; path=/; Max-Age=0`
        }})
    } catch (error) {
        return Response.json("Server error, Try again later", {status: 500})
    }
}


export async function POST(request) {
    const pathname = request.nextUrl.pathname
    const body = await request.json()
    if(pathname ===  apiRoutes.auth.login){
        return await loginUser(body)
    }
    if(pathname ===  apiRoutes.auth.logout){
        return await logoutUser()
    }
    if(pathname === apiRoutes.auth.refreshToken){
        const cookieStore = request.cookies.get('c_r_a__t')
        const cookie_refreshToken = cookieStore?.value
        const {refreshToken} = body
        const token = !refreshToken ? cookie_refreshToken : refreshToken
        return await refreshAccessToken(token)
    }
    return Response.json("Path not found", {status: 404})
}