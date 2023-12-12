import { Add } from "@mui/icons-material";
import { Box, Divider, IconButton, Skeleton, Stack, Typography } from "@mui/material";

const ChecklistLoading = () => {
    const lgth8 = [1,2,3,4,5,6,7,8];
    const lgth3 = [1,2,3];

    return (
        <Box
            className="checklist-page"
            sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
            }}
        >
            <Box
                className='checklist-widget-container'
                sx={{
                    flexGrow: 1,
                    maxWidth: '750px',
                    p: 1,
                }}
            >
                <Box
                    className="checklist-widget"
                    sx={{
                        width: '100%',
                    }}
                >
                    <Box
                        className="checklist-title-section"
                        sx={{
                            width: '100%',
                            p: 1,
                        }}
                    >
                        <Typography
                            variant='h3'
                        >
                            <Skeleton />
                        </Typography>
                    </Box>
                    <Box
                        className="checklist-content-section"
                        sx={{
                            width: '100%',
                            px: 2,
                        }}
                    >
                        <Stack
                            className='checkpoints-section'
                            divider={<Divider variant='middle' flexItem />}
                            spacing={2}
                            sx={{
                                width: '100%',
                            }}
                        >
                            {lgth8.map((index) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex'
                                        }}
                                    >
                                        <Skeleton 
                                            variant='rectangular'
                                            width={30} 
                                            height={30}
                                        />
                                        <Typography
                                            variant='body1'
                                            sx={{
                                                flexGrow: 1,
                                                mx: 1,
                                            }}
                                        >
                                            <Skeleton />
                                        </Typography>
                                    </Box>
                                )
                            })} 
                        </Stack>
                    </Box>
                </Box> 
            </Box>
            <Box
                className='lists-widget-container'
                sx={{
                    display: {xs: 'none', sm: 'none', md: 'block'},
                    flexGrow: 1,
                    maxWidth: '250px',
                    p: 1,
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                    }}
                >
                    <Box
                        className="my-checklist-title"
                        sx={{
                            display: 'flex',
                            p: 1,
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography
                            variant='body2'
                        >
                            My Checklists
                        </Typography>
                        <IconButton 
                            size='small'
                            disabled={true}
                        >
                            <Add fontSize='inherit' />
                        </IconButton>
                    </Box>
                    <Stack
                        spacing={1}
                        divider={<Divider flexItem />}
                    >
                            <Stack
                                spacing={0}
                            >
                                {lgth3.map((index) => {
                                    return (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                            }}
                                        >
                                            <Typography
                                                variant='h3'
                                                sx={{
                                                    flexGrow: 1,
                                                }}
                                            >
                                                <Skeleton 
                                                    sx={{
                                                    }}
                                                />
                                            </Typography>
                                        </Box>
                                    )
                                })} 
                            </Stack>
                            <Stack
                                spacing={0}
                            >
                                {lgth3.map((index) => {
                                    return (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex'
                                            }}
                                        >
                                            <Typography
                                                variant='h4'
                                                sx={{
                                                    flexGrow: 1,
                                                }}
                                            >
                                                <Skeleton />
                                            </Typography>
                                        </Box>
                                    )
                                })} 
                            </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )

} 
export default ChecklistLoading;
