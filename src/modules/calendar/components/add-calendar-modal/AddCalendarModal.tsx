import AddIcon from '@mui/icons-material/CloudUpload';
import InfoIcon from '@mui/icons-material/InfoRounded';
import {
  Button,
  Checkbox,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import fs from 'fs';
import moment from 'moment';
import { useState } from 'react';
import CalendarsData from '../../../../dummy_data/all_calendars.json';
import './AddCalendarModal.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: Function;
}) {
  const [nameValue, setNameValue] = useState('');
  const addNew = () => {
    const id = CalendarsData.sort((a, b) => (a.id < b.id ? 1 : -1))[0].id + 1;
    const newCalendar = {
      id,
      name: nameValue,
      last_edited: moment().format('HH:mm DD/MM/yyyy'),
      status: 'In Progress',
    };
    CalendarsData.push(newCalendar);
    // fs.writeFileSync(
    //   '../../../../dummy_data/all_calendars.json',
    //   JSON.stringify(CalendarsData)
    // );
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="box">
          <div className="modal-row flex-row-space-between">
            <Typography>Name</Typography>
            <TextField
              id="standard-basic"
              variant="standard"
              sx={{
                width: '300px;',
              }}
              onChange={(event) => setNameValue(event.target.value)}
            />
          </div>
          <div className="modal-row flex-row-space-between">
            <Typography>Date Start</Typography>
            <DatePicker
              sx={{
                width: '300px;',
              }}
              slotProps={{
                textField: {
                  size: 'small',
                  variant: 'standard',
                  placeholder: undefined,
                },
              }}
            />
          </div>
          <div className="modal-row flex-row-space-between">
            <Typography>Number Of Weeks</Typography>
            <TextField
              id="standard-basic"
              variant="standard"
              sx={{
                width: '300px;',
              }}
            />
          </div>
          <div className="modal-row flex-row-space-between">
            <Typography
              color="primary"
              variant="h6"
              component="div"
              align="left"
            >
              CPG Goals
            </Typography>
          </div>
          <div className="modal-row flex-row-space-between">
            <Typography>Optimisation Goal</Typography>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="sales"
                  control={<Radio />}
                  label="Sales"
                />
                <FormControlLabel
                  value="profit"
                  control={<Radio />}
                  label="Profit"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="modal-row flex-row-space-between">
            <Typography
              color="primary"
              variant="h6"
              component="div"
              align="left"
            >
              Business Constraints
            </Typography>
          </div>
          <div className="modal-row flex-row-space-between">
            <Typography>CPG Market Share</Typography>
            <TextField
              id="standard-basic"
              variant="standard"
              sx={{
                width: '300px;',
              }}
            />
          </div>
          <div className="modal-row flex-row-space-between">
            <Typography>Disruption Level</Typography>
            <FormControl
              variant="standard"
              sx={{
                width: '300px;',
              }}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={30}
                label="Age"
                onChange={() => {}}
              >
                <MenuItem value={10}>Low</MenuItem>
                <MenuItem value={20}>Medium</MenuItem>
                <MenuItem value={30}>High</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="modal-row flex-row-space-between">
            <Typography>Promo Constraints</Typography>
            <Button variant="contained" sx={{ width: '300px' }}>
              <div className="flex-row">
                <AddIcon
                  sx={{
                    marginRight: 1,
                    color: 'white',
                  }}
                ></AddIcon>
                <Typography color="white">UPLOAD</Typography>
              </div>
            </Button>
          </div>
          <div className="modal-row flex-row-space-between">
            <Typography>Locked Promo Slots</Typography>
            <Button variant="contained" sx={{ width: '300px' }}>
              <div className="flex-row">
                <AddIcon
                  sx={{
                    marginRight: 1,
                    color: 'white',
                  }}
                ></AddIcon>
                <Typography color="white">UPLOAD</Typography>
              </div>
            </Button>
          </div>
          <div className="modal-row flex-row-space-between">
            <Typography>
              Each brandline is on promo at lease once per period
            </Typography>
            <Checkbox sx={{ padding: 0 }}></Checkbox>
          </div>
          <div className="modal-row flex-row-space-between">
            <Typography>Info on other applied constraints</Typography>
            <InfoIcon />
          </div>
          <div className="modal-row flex-row-space-between">
            <Button variant="contained" sx={{ width: '100%' }} onClick={addNew}>
              <Typography color="white">OPTIMIZE</Typography>
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
