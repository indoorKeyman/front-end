import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import butter from '../image/butter_border.png'
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

function ChatListList({ id }) {

    const date = new Date();
    const hour = date.toLocaleTimeString('ko-kr')

    const EditLink = styled(Link)(({ theme }) => ({
        color: 'black',
        textDecoration: "none",
    }));

    return (

        <EditLink to={`/chat/${id}`}>
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
                <Box width="65%" mr={5} >
                    <Typography variant="h5" fontWeight={600}>
                        nickname
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            mt: '3px',
                            color: "gray",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }}>
                        Voluptate ad qui fugiat ullamco aute culpa adipisicing. Sint amet magna Lorem aliqua est amet cillum proident duis ea ea. Minim cupidatat officia nostrud mollit incididunt consectetur sit reprehenderit elit sit quis enim minim. Cillum occaecat cillum irure aliquip commodo occaecat nulla ipsum dolore occaecat.
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box mb={1}>
                        {hour}
                    </Box>
                    <Box height="50px" width="50px" sx={{ fontSize: "30px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", backgroundColor: "#E24646" }}>
                        1
                    </Box>
                </Box>
            </Box>
        </EditLink>
    );
}

export default ChatListList;