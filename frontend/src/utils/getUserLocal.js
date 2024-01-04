const getUserLocal = ()=>{
    const storedUserDataString = localStorage.getItem("userData");
    return JSON.parse(storedUserDataString);
}
export default getUserLocal