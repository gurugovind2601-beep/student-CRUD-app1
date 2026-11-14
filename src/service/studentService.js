import axiosinstance from "../api/axiosinstance";

export const getStudent=()=>{
    return axiosinstance.get("/student");
}

export const addStudent=(id)=>{
    return axiosinstance.post("/student",id);
}

export const updateStudent=(id,student)=>{
    return axiosinstance.put('/student/${id}',student);
}

export const deleteStudent=(id)=>{
    axiosinstance.delete('/student/${id}')
}