import { TextField, Button, Paper } from "@mui/material";
import { useState } from "react";

const StudentForm = ({addStudentData,editingStudent,updateStudentData})=>{

    const[student,setStudent]=useState({
        name: editingStudent?.name ||"",
        course:editingStudent?.course || ""
    })

    const handleChange=(e)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        });
        console.log(student);
    }

    const handleSubmit=()=>{
        if(!student.name||!student.course){
            alert("please fill all the fields");
            return;
        }
        if(editingStudent){
            updateStudentData({
                ...student,
                id: editingStudent.id
            })
        }
        else{
            addStudentData(student);
        }
        setStudent({
            name:"",
            course:""
        })
    }

    return(
        <Paper>
            <TextField
                fullWidth
                label="Student name"
                name="name"
                margin='normal'
                value={student.name}
                onChange={handleChange}
            />

            <TextField
                fullWidth
                label="course"
                name="course"
                margin='normal'
                value={student.course}
                onChange={handleChange}
            />
            <Button variant='contained' onClick={handleSubmit}>{editingStudent ? "Update" : "Add"}</Button>
        </Paper>

    )
}

export default StudentForm