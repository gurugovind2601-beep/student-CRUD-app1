import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const StudentList=({students,deleteStudentData,editStudentData})=>{

    return(
        <>
            {students.map((student,index)=>(
                <Card key={student.id} sx={{mb:2}}>
                    <CardContent>
                        <Typography>{student.name}</Typography>
                        <Typography>{student.course}</Typography>

                        <Button variant='contained' sx={{mr:1}} onClick={()=>editStudentData(student)} onClickCapture={()=>{
                            editStudentData(student)                                
                        }}>Edit</Button>

                        <Button color='error'
                        variant='contained' sx={{mr:1}}
                        onClick={()=>deleteStudentData(student.id)}>Delete</Button>

                    </CardContent>
                </Card>
            ))}
        </>
    )
}

export default StudentList