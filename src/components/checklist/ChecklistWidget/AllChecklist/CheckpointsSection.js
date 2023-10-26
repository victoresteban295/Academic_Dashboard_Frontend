import { CheckBoxOutlineBlank, CheckBoxOutlined, DeleteOutline } from "@mui/icons-material";
import { Box, Divider, IconButton, InputBase, Stack, Typography } from "@mui/material";
import SubpointsSection from "./SubpointsSection";

const CheckpointsSection = ({ reloadPage, content, subpoints, isComplete, isSubpoint }) => {
    return (
        <Stack
            spacing={0}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <IconButton size='large'>
                    <CheckBoxOutlineBlank fontSize='inherit' />
                </IconButton>
                <InputBase 
                    value={content}
                    sx={{
                        flexGrow: 1,
                    }}
                />
            </Box>
            {subpoints.length > 0 ? <Divider variant='middle' flexItem/> : <Box></Box>}
            <Stack
                className='supoints-section'
                divider={<Divider variant='middle' flexItem />}
                spacing={0}
                sx={{
                    flexGrow: 1,
                    pl: 4,
                }}
            >
                {subpoints.map((subpoint) => {
                    const { content, isComplete, isSubpoint } = subpoint;
                    return(
                        <SubpointsSection
                            reloadPage={reloadPage}
                            content={content}
                            isComplete={isComplete}
                            isSubpoint={isSubpoint}
                        />
                    )
                })}

            </Stack>
        </Stack>
    )
}

export default CheckpointsSection;
