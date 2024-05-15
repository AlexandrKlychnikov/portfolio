import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  Link
} from '@mui/material';
import useStyles from '../styles/styles';

const ContactMe = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('About the job offer');
  const [message, setMessage] = useState('');
  const classes = useStyles();

  return (
    <Box id="contacts" className={classes.formContainer}>
      <Typography variant="h4" className={classes.formHeading}>
        Contact Me
      </Typography>
      <Box
        className={classes.form}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Email"
          defaultValue="klychnikov75@mail.ru"
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          className={classes.inputField}
        />

        <TextField
          label="Subject"
          fullWidth
          className={classes.inputField}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <TextareaAutosize
          aria-label="minimum height"
          minRows={6}
          placeholder="Enter your message"
          className={classes.textArea}
          spellCheck
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          component='a'
          href={ `mailto:fang_party@mail.ru?subject=${subject}&body=${message}` }
          sx={{ width: '200px', fontSize: '16px' }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ContactMe;