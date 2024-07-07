import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import butter from '../image/butter_border.png'

import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

function CompleteList() {

    const date = new Date();
    const hour = date.toLocaleTimeString('ko-kr')



    return (
        <Box sx={{
            borderBottom: "solid  6px #060705",
            borderRight: "solid  6px #060705",
            borderLeft: "solid  2px #060705",
            borderTop: "solid  2px #060705",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            mt: '10px',
            mb: '40px',
            pl: '10px',
            pr: '10px',
            height: '140px',
            width: '80%',
            minWidth: "980px",
        }}
        >

            <Box
                mr={5}
                ml={5}
                component="img"
                alt="profile img in chatlist"
                src={butter}
                sx={{
                    borderRadius: '30px',
                    height: 100,
                    width: 100,
                }}
            />
            <PublishedWithChangesIcon sx={{ fontSize: 60 }} />
            <Box
                mr={5}
                ml={5}
                component="img"
                alt="profile img in chatlist"
                src={butter}
                sx={{
                    borderRadius: '30px',
                    height: 100,
                    width: 100,
                }}
            />
            <Box width="65%" ml={3} mr={5} >
                <Typography variant="h4">
                    물품명
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mr: '30px'
                }}
            >
                {hour}
            </Box>
        </Box >
    );
}

export default CompleteList;