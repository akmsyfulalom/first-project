import { Request, Response } from "express";
import { studentServices } from "./student.service";
import studentJoiValidationSchema from "./student.validation";


const createStudent = async (req: Request, res: Response) =>{

    try {
        // creating a schema validation using Joy 
       
          


        const {student: studentData} = req.body;
          

        const {error} = studentJoiValidationSchema.validate(studentData); 
        const result = await studentServices.createStudentInToDB(studentData);


        if(error){
            res.status(500).json({
                success: false,
                message: 'something went wrong',
                error: error.details
            })
        }


    // will call service func to send this data  

    // send response 
    res.status(200).json({
        success: true,
        message: "Student created successfully",
        data: result
    })
    } catch (error) {
       res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error,
       
       })
       console.log(error)
    }
};


const getAllStudents = async (req: Request, res: Response) =>{
    try {
        const result = await studentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "Students are retrived successfully",
            data: result
        })
    } catch (error) {
        console.log(error)
    }
};


const getSingleStudent = async(req: Request, res: Response) =>{
    try {
        const {studentId} = req.params
        const result = await studentServices.getSingleStudentsFromDB(studentId);
    res.status(200).json({
        success: true,
        message: "student is retrive successfully",
        data: result
    })
    } catch (error) {
        console.log(error)
    }
}

export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent
};