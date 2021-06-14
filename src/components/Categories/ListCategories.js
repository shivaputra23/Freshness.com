import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  Typography,
  Radio,
} from "@material-ui/core";
import { Star, StarOutlineOutlined, ArrowDropDown } from "@material-ui/icons";
import React from "react";

function ListCategories() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h6">Categories</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography>Category Name</Typography>
          <Chip label="12" />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Category Name</Typography>
          <Chip label="12" />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Category Name</Typography>
          <Chip label="12" />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Category Name</Typography>
          <Chip label="12" />
        </Box>
      </Grid>
      <Grid item container direction="column">
        <Typography variant="h6">Brands</Typography>
        <FormControlLabel control={<Checkbox />} label="Filter by Brand" />
        <FormControlLabel control={<Checkbox />} label="Filter by Brand" />
        <FormControlLabel control={<Checkbox />} label="Filter by Brand" />
        <FormControlLabel control={<Checkbox />} label="Filter by Brand" />
      </Grid>
      <Grid item direction="column" container>
        <Typography variant="h6">Rating</Typography>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <>
              <Star style={{ color: "yellow" }} />
              <Star style={{ color: "yellow" }} />
              <Star style={{ color: "yellow" }} />
              <Star style={{ color: "yellow" }} />
              <Star style={{ color: "yellow" }} />
            </>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <>
              <Star style={{ color: "yellow" }} />
              <Star style={{ color: "yellow" }} />
              <Star style={{ color: "yellow" }} />
              <Star style={{ color: "yellow" }} />
              <StarOutlineOutlined />
            </>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <>
              <Star style={{ color: "yellow" }} />
              <Star style={{ color: "yellow" }} />
              <Star style={{ color: "yellow" }} />
              <StarOutlineOutlined />
              <StarOutlineOutlined />
            </>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <>
              <Star style={{ color: "yellow" }} />
              <Star style={{ color: "yellow" }} />
              <StarOutlineOutlined />
              <StarOutlineOutlined />
              <StarOutlineOutlined />
            </>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <>
              <Star style={{ color: "yellow" }} />
              <StarOutlineOutlined />
              <StarOutlineOutlined />
              <StarOutlineOutlined />
              <StarOutlineOutlined />
            </>
          }
        />
      </Grid>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row">
          <Box borderRadius="5px" display="flex" alignItems="center">
            <Radio /> <Typography variant="body1">Filter Text</Typography>
          </Box>
          <Box
            borderRadius="2px"
            display="flex"
            alignItems="center"
            marginLeft="2rem"
          >
            <Radio /> <Typography variant="body1">Filter Text</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Checkbox />{" "}
            <Typography variant="body1">
              {" "}
              Filter <Chip label="Nbm" />
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            marginLeft="2rem"
          >
            <Checkbox />{" "}
            <Typography variant="body1">
              {" "}
              Filter <Chip label="Nbm" />
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Checkbox />{" "}
          <Typography variant="body1">
            {" "}
            Filter <Chip label="12" /> | select
          </Typography>{" "}
          <ArrowDropDown />
        </Box>
        <Box display="flex" flexDirection="row">
          <Box
            borderRadius="5px"
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Radio /> <Typography variant="body1">Field name</Typography>
          </Box>
          <Box
            borderRadius="2px"
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Radio /> <Typography variant="body1">Field name</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Checkbox />{" "}
          <Typography variant="body1">
            {" "}
            Field name <Chip label="32" />
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Checkbox />{" "}
          <Typography variant="body1">
            {" "}
            Filter <Chip label="12" /> | select
          </Typography>{" "}
          <ArrowDropDown />
        </Box>
      </Box>
    </Grid>
  );
}

export default ListCategories;
