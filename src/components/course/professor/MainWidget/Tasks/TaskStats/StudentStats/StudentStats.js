import { Search } from "@mui/icons-material";
import { Divider, FormControl, InputBase, Stack } from "@mui/material";
import NotGradedStudent from "./NotGradedStudent";
import { useState } from "react";
import { queryStudents } from "@/lib/utils/courses/frontend/modifyTasks";
import GradedStudent from "./GradedStudent";

const StudentStats = ({ 
    totalScore,
    gradedStudents, 
    notGradedStudents ,
    handleGradedStudents,
    handleNotGradedStudents
}) => {

    /* State Value */
    const [searchQuery, setSearchQuery] = useState("");
    const [gradedStuds, setGradedStuds] = useState([...gradedStudents]);
    const [notGradedStuds, setNotGradedStuds] = useState([...notGradedStudents]);

    const handleQueryStudents = (query) => {
        setSearchQuery(query);
        const results = queryStudents(query, gradedStudents, notGradedStudents);

        //Update UI with Results
        setNotGradedStuds(results.notGradedStudents);
        setGradedStuds(results.gradedStudents);
    }

    return (
        <Stack
            spacing={1}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                className="taskdetail-student-search-bar"
                sx={{
                    width: '100%',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                    px: 2,
                    py: 0.5,
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                        width: '100%',
                    }}
                >
                    <Search 
                        color="primary"
                    />
                    <FormControl fullWidth >
                        <InputBase
                            value={searchQuery} 
                            onChange={(event) => {
                                handleQueryStudents(event.target.value);
                            }}
                            placeholder="Search Student..."
                            sx={{ ml: 1, flex: 1 }}
                        />
                    </FormControl>
                </Stack>
            </Stack>
            <Stack
                divider={
                    <Divider 
                        flexItem 
                        sx={{
                            display: notGradedStudents.length === 0 ? 'none' : 'block',
                        }}
                    />
                }
                sx={{
                    px: 2,
                }}
            >
                <Stack
                    divider={<Divider flexItem />}
                    sx={{
                        width: '100%',
                    }}
                >
                    {notGradedStuds.map(student => {
                        const { studId, name, gradeLvl } = student;
                        return (
                            <NotGradedStudent
                                key={studId}
                                studId={studId}
                                name={name}
                                gradeLvl={gradeLvl}
                                totalScore={totalScore}
                                gradedStudents={gradedStuds}
                                notGradedStudents={notGradedStuds}
                                handleGradedStudents={handleGradedStudents}
                                handleNotGradedStudents={handleNotGradedStudents}
                            />
                        )
                    })}
                </Stack>
                <Stack
                    divider={<Divider flexItem />}
                    sx={{
                        width: '100%',
                    }}
                >
                    {gradedStuds.map(student => {
                        const { studId, name, gradeLvl, taskGrade } = student;
                        return (
                            <GradedStudent
                                key={studId}
                                studId={studId}
                                name={name}
                                gradeLvl={gradeLvl}
                                taskGrade={taskGrade}
                                totalScore={totalScore}
                                gradedStudents={gradedStuds}
                                notGradedStudents={notGradedStuds}
                                handleGradedStudents={handleGradedStudents}
                                handleNotGradedStudents={handleNotGradedStudents}
                            />
                        )
                    })}
                </Stack>
            </Stack>
        </Stack> 
    )
}

export default StudentStats;
