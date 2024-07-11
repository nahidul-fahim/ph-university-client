import { useAcademicSemesterQuery } from "../../../redux/features/academiSemester/academicSemester";


const AcademicSemester = () => {

    // get data
    const { data } = useAcademicSemesterQuery(undefined);

    console.log(data);


    return (
        <div>
            <h2>Academic semester page</h2>
        </div>
    );
};

export default AcademicSemester;