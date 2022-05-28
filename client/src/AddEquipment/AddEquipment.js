import React, { useState } from "react";
import {
  TextField,
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AddEquipment = ({ refreshData, refreshToggle }) => {
  const [open, setOpen] = useState(false);

  const validationSchema = yup.object().shape({
    equipmentName: yup.string().required("Enter valid value."),
    quantity: yup.string().required("Enter valid value."),
    roomNo: yup.string().required("Enter valid value."),
    description: yup.string().required("Enter valid value."),
    remarks: yup.string().required("Enter valid value."),
  });

  const formik = useFormik({
    initialValues: {
      equipmentName: "",
      quantity: "",
      roomNo: "",
      description: "",
      remarks: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      axios.post("http://localhost:3001/add-equipment", values).then((res) => {
        console.log(values);
      });

      refreshToggle(!refreshData);
      setOpen(true);
      resetForm();
    },
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Snackbar
        style={{ backgroundColor: "lightgreen" }}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        sx={{ width: "100%" }}>
        <Alert
          style={{ backgroundColor: "lightgreen" }}
          severity="success"
          sx={{ width: "100%" }}>
          Success
        </Alert>
      </Snackbar>
      <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "1.5rem" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Classroom Equipment Management System
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component={"div"} variant="h6">
            Add Equipment
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"div"}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={3}>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "27ch" },
                  }}
                  onSubmit={formik.handleSubmit}
                >
                  <div>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Equipment Name"
                      name="equipmentName"
                      value={formik.values.equipmentName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.equipmentName &&
                        Boolean(formik.errors.equipmentName)
                      }
                      helperText={
                        formik.touched.equipmentName &&
                        formik.errors.equipmentName
                      }
                    />
                    <TextField
                      id="outlined-textarea"
                      label="Quantity"
                      type="number"
                      name="quantity"
                      value={formik.values.quantity}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.quantity &&
                        Boolean(formik.errors.quantity)
                      }
                      helperText={
                        formik.touched.quantity && formik.errors.quantity
                      }
                    />
                    <TextField
                      id="outlined-textarea"
                      label="Room No."
                      type="number"
                      name="roomNo"
                      value={formik.values.roomNo}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.roomNo && Boolean(formik.errors.roomNo)
                      }
                      helperText={formik.touched.roomNo && formik.errors.roomNo}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      fullWidth
                      rows={4}
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.description &&
                        Boolean(formik.errors.description)
                      }
                      helperText={
                        formik.touched.description && formik.errors.description
                      }
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Remarks"
                      multiline
                      fullWidth
                      rows={4}
                      name="remarks"
                      value={formik.values.remarks}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.remarks && Boolean(formik.errors.remarks)
                      }
                      helperText={
                        formik.touched.remarks && formik.errors.remarks
                      }
                    />
                  </div>
                  <div>
                    <Button variant="contained" fullWidth type="submit">
                      Add Equipment
                    </Button>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default AddEquipment;
