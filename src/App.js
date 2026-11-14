import { Container, Typography } from "@mui/material";
import StudentForm from './components/StudentForm'
import React, { useEffect, useState } from "react";
import { addStudent, deleteStudent, updateStudent , getStudent} from "./service/studentService";
import StudentList from './components/StudentList'

function App(){
    const[students, setStudents]=useState([]);

    const[editingStudent,setEditingStudent]=useState(null);

    useEffect(()=>{
      fetchStudents();
    },[])

    const fetchStudents= async()=>{
      try{
        const response=await getStudent();
        setStudents(response?.data);
      }catch(err){
        console.log(err);
      }
    }

    const addStudentData=async(student)=>{
      await addStudent(student);
      fetchStudents();
    }

    const updateStudentData=async(student)=>{
      await updateStudent(student.id,student);
      setEditingStudent(null);
      fetchStudents();
    }

    const deleteStudentData=async(id)=>{
      await deleteStudent(id);
      fetchStudents();
    }

    return(
      <Container maxWidth="md">
        <Typography variant='h4' sx={{mt:3,mb:3}}>Student CRUD application</Typography>
        <StudentForm addStudentData={addStudentData} editingStudent={editingStudent}
          updateStudentData={updateStudentData}/>
        <StudentList students={students} deleteStudentData={deleteStudentData} editStudentData={setEditingStudent}/>
      </Container>
    );
}

export default App