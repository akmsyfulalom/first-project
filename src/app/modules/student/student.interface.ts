
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string;
  };


export type LocalGurdian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string
}

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNumber: string;
  email: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGurdian: LocalGurdian;
  profileImg?: string;
  isActive: "active" | "blocked"
};

