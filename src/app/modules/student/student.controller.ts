import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) =>{

    try {
        const {student: studentData} = req.body;

    // will call service func to send this data  

    const result = await studentServices.createStudentInToDB(studentData);
    // send response 
    res.status(200).json({
        success: true,
        message: "Student created successfully",
        data: result
    })
    } catch (error) {
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