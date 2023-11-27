import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentInToDB = async (studentData: TStudent) => {
  if (await Student.isUseExists(studentData.id)) {
    throw new Error('User already exists!');
  }
  const result = await Student.create(studentData); // built in static method

  //   const student = new Student(studentData); // create an instance

  // if(await student.isUserExists(studentData.id)){
  //     throw new Error("User already exists!")
  // }

  //   const result = await student.save(); // build in instance method mongoose
  //   return result;
  // };
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  //   const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  createStudentInToDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentFromDB,
};
