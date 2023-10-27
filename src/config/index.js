import axios from 'axios'

const baseURL = "http://localhost:3000/api"

export const axiosPublic = axios.create({withCredentials: true, baseURL})

export const authAxios = axios.create({withCredentials: true, baseURL})
// Request interceptor for API calls
authAxios.interceptors.request.use(
  async config => {
    const access_token = authAxios?.accessToken
    if(!access_token) return Promise.reject(new Error("No access token provided"))
    config.headers = { 
      'Authorization': `Bearer ${access_token}`,
      'Accept': 'application/json'
    }
    return config;
  },
  error => {
    Promise.reject(error)
});
// Response interceptor for API calls
authAxios.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  console.log("Original error: ",  originalRequest)
  if (error?.response?.status === 403 && !originalRequest._retry) {
    try {
        originalRequest._retry = true;
        const result = await refreshAccessToken(authAxios?.refreshToken); 
        console.log("This is a refresh token retry", result)
        originalRequest.headers["Authorization"] = `Bearer ${result.accessToken}`;
        console.log("retry config ", originalRequest)
        authAxios.accessToken = result.accessToken;
        authAxios.refreshToken = result.accessToken;
        return authAxios(originalRequest);
      } catch (_error) {
        if (_error.response && _error.response.data) {
          return Promise.reject(_error.response.data);
        }
        return Promise.reject(_error);
      }
  }
  return Promise.reject(error);
});


export const refreshAccessToken = async (refreshToken) => {
    const response = await axios.post(
        `${baseURL}/auth?query=refresh_token`,
        {refreshToken}
      );
      const data = response.data?.data
    return data
};


export const avatars = ["/avatars/avatar1.png", "/avatars/avatar2.png", "/avatars/avatar3.png", "/avatars/avatar4.png", "/avatars/avatar5.png", "/avatars/avatar6.png", "/avatars/avatar7.png", "/avatars/avatar8.png", "/avatars/avatar9.png", "/avatars/avatar10.png", "/avatars/avatar11.png", "/avatars/avatar12.png", "/avatars/avatar13.png", "/avatars/avatar14.png", "/avatars/avatar15.png", "/avatars/avatar16.png", "/avatars/avatar17.png"]




const config = {
    siteName: "Clair Aid Foundation",
    drawerWidth: 240,
    websiteUrl: process.env.NODE_ENV === "production" ? "http://localhost:3000" : "https://768c-2c0f-2a80-90-1400-ecb1-6f6b-4f8f-9907.ngrok-free.app",
    navItems: [{ title: 'Home', link: "/" }, { title: 'About Us', link: "/about-us" }, { title: 'Projects', link: "/projects" },  { title: "Contact Us", link: "/contact-us" }, { title: 'Blog', link: "/blog" }, { title: 'Volunteer', link: "/volunteer" }],
    responsive: {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    },
    carouselItems: [
        {
            title: "Empowering and Inspiring Vulnerable Communities", 
            subtitle: "Claire Aid Foundation",
            description: "Claire Aid Foundation is a Non-Governmental Organization in Jos, Nigeria with RC175906. We are passionate about SDGs 4 - Quality Education, SDG 1 - No poverty, SDG 3 - Good health and well-being.",
            background: "/ngo-carousel-1.jpg",
            buttons: [{title: "Donate", link: "/donate", variant:"outlined"},{title: "Read More", link: "/projects/jebbu-miango-reads",variant:"contained"}]
        },
        {
            title: "Jebbu Miango Reads", 
            subtitle: "OUR PILOT PROJECT",
            description: " In 2019 our work started with a children's Bible club and then teaching children and teenagers in Jebbu Miango how to read. As time went on, we became interested in more than just the spiritual and academic needs of children but the physical, health and holistic needs of the children and adults in the community. ",
            background: "/ngo-carousel-2.jpg",
            buttons: [{title: "Donate", link: "/donate", variant:"outlined"},{title: "Read More", link: "/projects/jebbu-miango-reads", variant:"contained"}]
        }
    ],
    homeCardItems: [
        {
            title: "Donate To Support", 
            description: "Claire Aid Foundation is changing the lives of people through various outreaches that are capital intensive to execute. Your donation will increase our impact.", 
            btnText: "Join Us Today", 
            icon: "monetization_on" 
        },
        {
            title: "Become A Volunteer", 
            description: "Join Claire Aid Foundation to make a difference in rural communities", 
            btnText: "Donate Now", 
            icon: "volunteer_activism" 
        },
        {
            title: "Become A Partner", 
            description: "Claire Aid Foundation is open to partnerships with other organizations that are pursuing the same goals.", 
            btnText: "Learn More", 
            icon: "diversity_3" 
        }
    ]
}

export default config
