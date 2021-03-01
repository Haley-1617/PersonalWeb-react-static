import React from 'react';
import { Input, Grid, TextField, Button, Container } from '@material-ui/core/';

export default function ContactForm(props) {
  return (
    <Container maxWidth='sm' style={{ paddingTop: 20 }}>
      <form method='POST' style={{ width: '100%' }}>
        <Grid container spacing={props.bp ? 3 : 2} justify='center'>
          <Grid item xs={12} sm={6}>
            <Input
              label='name'
              type='text'
              placeholder='Your Name'
              style={{ width: props.bp ? '80%' : '60%' }}
              inputProps={!props.bp ? { style: { fontSize: 12 } } : {}}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              label='email'
              type='text'
              placeholder='Email'
              style={{ width: props.bp ? '80%' : '60%' }}
              inputProps={!props.bp ? { style: { fontSize: 12 } } : {}}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label='subject'
              type='text'
              placeholder='Subject'
              style={{ width: props.bp ? '80%' : '60%' }}
              inputProps={!props.bp ? { style: { fontSize: 12 } } : {}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Message'
              multiline
              rows={props.bp ? 6 : 2}
              variant='outlined'
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' size={!props.bp ? 'small' : 'default'}>
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
