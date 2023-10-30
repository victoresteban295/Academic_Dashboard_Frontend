import { CheckBoxOutlineBlank, CheckBoxOutlined, DeleteOutline } from "@mui/icons-material";
import { Box, Divider, IconButton, InputBase, Stack, Typography } from "@mui/material";
import SubpointsSection from "./SubpointsSection";

const CheckpointsSection = ({ content, subpoints, completedSubpoints, isCompleted, isSubpoint }) => {
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
                {isCompleted ? (
                    <IconButton size='large'>
                        <CheckBoxOutlined fontSize='inherit' />
                    </IconButton>
                ) : (
                    <IconButton size='large'>
                        <CheckBoxOutlineBlank fontSize='inherit' />
                    </IconButton>
                )}

                {isCompleted ? (
                    <Typography
                        variant='body2'
                        sx={{
                            textDecoration: 'line-through',
                        }}
                    >
                        {content}
                    </Typography>
                ) : (
                    <InputBase 
                        value={content}
                        sx={{
                            flexGrow: 1,
                        }}
                    />
                )}
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
                    const { content } = subpoint;
                    return(
                        <SubpointsSection
                            content={content}
                            isCompleted={false}
                        />
                    )
                })}
                {completedSubpoints.map((completedSubpoint) => {
                    const { content } = completedSubpoint;
                    return(
                        <SubpointsSection
                            content={content}
                            isCompleted={true}
                        />
                    )
                })}
            </Stack>
        </Stack>
    )
}

export default CheckpointsSection;
