import { Box, Container } from "@mui/material";
import EdiltProfileForm from "../components/EditProfileForm";
import Header from "../components/Header";


function EditProfile() {


    return (
        <>
            <Header />
            <Container component="main" maxWidth="xl" sx={{ minWidth: 1100, minHeight: 300 }}  >
                <Box className='listHeader' >
                    Edit Profile
                </Box>
                <EdiltProfileForm />
            </Container>
        </>
    );
}

export default EditProfile;