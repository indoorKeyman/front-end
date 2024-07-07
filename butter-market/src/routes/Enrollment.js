import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ClearIcon from "@mui/icons-material/Clear";

import { useState } from "react";

import {} from "../app/enrollSlice";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import {
  FormControl,
  ImageList,
  ImageListItem,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { enrolling } from "../app/enrollSlice";

function Enrollment() {
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#1C4464",
    color: "white",
    "&:hover": {
      backgroundColor: "#F9D020",
      color: "black",
    },
  }));

  const ColorButton2 = styled(Button)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1C4464",
    width: "10%",
    color: "white",
    "&:hover": {
      backgroundColor: "#F9D020",
      color: "black",
    },
  }));

  const [newTitle, setNewTitle] = useState("");
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [wantedObjectName, setWantedObjectName] = useState("");
  const [wantedObjectCategory, setWantedObjectCategory] = useState("");
  const [newDes, setNewDes] = useState("");
  const [showImages, setShowImages] = useState([]);

  const dispatch = useDispatch();

  const onChangNewTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const onChangNewName = (e) => {
    setNewName(e.target.value);
  };

  const onChangeNewCategory = (e) => {
    setNewCategory(e.target.value);
  };

  const onChangWantedObjectName = (e) => {
    setWantedObjectName(e.target.value);
  };

  const onChangWantedObjectCategory = (e) => {
    setWantedObjectCategory(e.target.value);
  };

  const onChangeNewDes = (e) => {
    setNewDes(e.target.value);
  };

  const handleAddImages = (e) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }

    setShowImages(imageUrlLists);
  };

  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  const onSubmit = (e) => {
    console.log("제출");

    e.preventDefault();

    if (newTitle === "") {
      window.alert("'제목'이 비어있습니다.");
      return;
    }
    if (newName === "") {
      window.alert("'상품명'이 비어있습니다.");
      return;
    }
    if (newCategory === "") {
      window.alert("'카테고리'가 비어있습니다.");
      return;
    }
    if (wantedObjectName === "") {
      window.alert("'원하는 상품 이름'이 비어있습니다.");
      return;
    }
    if (wantedObjectCategory === "") {
      window.alert("'원하는 상품 카테고리'가 비어있습니다.");
      return;
    }
    if (newDes === "") {
      window.alert("'상품 설명'이 비어있습니다.");
      return;
    }
    const formData = new FormData();

    formData.append(
      "request",
      new Blob(
        [
          JSON.stringify({
            title: "책 팔아요~",
            objectName: "이것이 자바다",
            wantedObjectName: "마우스",
            objectCategory: "BOOK",
            wantedObjectCategory: "BOOK",
            detailText: "얼마나 썻는데 필요 없어서 팔아요~",
          }),
        ],
        { type: "application/json" }
      )
    );

    formData.append("images", showImages);

    // formData.append('request', newName)
    // formData.append('request', newCategory)
    // formData.append('request', wantedObjectName)
    // formData.append('request', wantedObjectCategory)
    // formData.append('request', newDes)

    // FormData의 key 확인
    for (let key of formData.keys()) {
      console.log(key);
    }

    // FormData의 value 확인
    for (let value of formData.values()) {
      console.log(value);
    }

    dispatch(enrolling({ formData }));

    // dispatch(enrolling({
    //     images: showImages,
    //     title: newTitle,
    //     objectName: newName,
    //     objectCategory: newCategory,
    //     wantedObjectName: wantedObjectName,
    //     wantedObjectCategory: wantedObjectCategory,
    //     detailText: newDes,
    // }))

    setShowImages([]);
    setNewTitle("");
    setNewName("");
    setNewCategory("");
    setWantedObjectName("");
    setWantedObjectCategory("");
    setNewDes("");
  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xl">
        <Box sx={{ pr: 40, pl: 40, minWidth: "800px" }}>
          <Box
            sx={{
              borderBottom: "6px solid #060705",
              borderRight: "6px solid #060705",
              borderLeft: "1px solid #060705",
              marginTop: 20,
              padding: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "500",
              borderRadius: "20px",
            }}
          >
            <Typography component="h1" variant="h5">
              🤣 물품 등록하기!
            </Typography>

            <Box
              encType="multipart/form-data"
              component="form"
              onSubmit={onSubmit}
              sx={{ mt: 5, width: "70%", height: "100%" }}
            >
              <Box sx={{ border: "solid 2px white" }}>
                <ColorButton2
                  onChange={handleAddImages}
                  variant="contained"
                  component="label"
                >
                  <AddPhotoAlternateIcon type="file" sx={{ fontSize: 50 }} />
                  <input type="file" accept="image/*" hidden multiple />
                  <Typography variant="h7">{showImages.length}/5</Typography>
                </ColorButton2>

                <ImageList cols={5} rowHeight={150}>
                  {showImages.map((image, id) => (
                    <ImageListItem
                      sx={{ position: "relative", bottom: -10, mr: 1 }}
                      key={id}
                    >
                      <Box
                        component="img"
                        sx={{
                          overfolow: "hidden",
                          position: "absolute",
                          zIndex: 1,
                          width: "100%",
                        }}
                        alt={`enroll img : ${image}-${id}`}
                        src={image}
                      />
                      <ClearIcon
                        sx={{
                          color: "red",
                          position: "absolute",
                          zIndex: 2,
                          right: -17,
                          top: -17,
                          fontSize: 35,
                          fontWeight: "bold",
                        }}
                        onClick={() => handleDeleteImage(id)}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>

              <Box sx={{ textAlign: "left", mt: 0 }}>제목</Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  onChange={onChangNewTitle}
                  value={newTitle}
                  margin="normal"
                  required
                  fullWidth
                  id="newTitle"
                  label="제목을 입력하세요"
                  name="newTitle"
                  autoFocus
                />
              </Box>

              <Box sx={{ textAlign: "left", mt: 2 }}>상품명</Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  onChange={onChangNewName}
                  value={newName}
                  margin="normal"
                  required
                  fullWidth
                  id="newId"
                  label="상품명을 입력하세요"
                  name="newId"
                  autoFocus
                />
              </Box>
              <Box sx={{ textAlign: "left", mt: 1 }}>카테고리</Box>
              <FormControl sx={{ mt: 2 }} fullWidth>
                <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={newCategory}
                  label="카테고리"
                  onChange={onChangeNewCategory}
                >
                  <MenuItem value={"BOOK"}>전자제품</MenuItem>
                  <MenuItem value={"CLOTHES"}>의류</MenuItem>
                  <MenuItem value={"도서"}>도서</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ textAlign: "left", mt: 2 }}>원하는 상품 이름</Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  onChange={onChangWantedObjectName}
                  value={wantedObjectName}
                  margin="normal"
                  required
                  fullWidth
                  id="wantedObjectName"
                  label="원하는 상품명을 입력하세요"
                  name="wantedObjectName"
                  autoFocus
                />
              </Box>

              <Box sx={{ textAlign: "left", mt: 1 }}>원하는 상품 카테고리</Box>
              <FormControl sx={{ mt: 2 }} fullWidth>
                <InputLabel id="demo-simple-select-label">
                  원하는 상품 카테고리
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={wantedObjectCategory}
                  label="카테고리"
                  onChange={onChangWantedObjectCategory}
                >
                  <MenuItem value={"BOOK"}>전자제품</MenuItem>
                  <MenuItem value={"CLOTHES"}>의류</MenuItem>
                  <MenuItem value={"도서"}>도서</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ textAlign: "left", mt: 2 }}>상품 설명</Box>
              <TextField
                onChange={onChangeNewDes}
                value={newDes}
                margin="normal"
                required
                fullWidth
                id="newDes"
                label="상품에 대해 설명해주세요!"
                name="newDes"
                autoFocus
              />

              <ColorButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  ml: 17,
                  borderRadius: "12px",
                  maxWidth: "250px",
                }}
              >
                등록하기
              </ColorButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Enrollment;
