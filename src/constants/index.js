export const apiRoutes = {
    auth: {
        login: "/api/auth",
        refreshToken: "/api/auth?query=refresh_token",
        logout: "/api/auth?query=logout"
    },
    users: {
        allUsers: "/api/users"
    },
    volunteers: {
        allVolunteers: "/api/volunteers"
    }
}
