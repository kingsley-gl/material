/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from "axios";



const styles = theme => ({
    layout: {
        width: 400,
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
          width: 400,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
      },
      avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
      },
      submit: {
        marginTop: theme.spacing.unit * 3,
      },
});

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            signIn:"登录",
            address: "账号",
            password: "密码",
        };
    }
    handleSubmit = (e) =>{
        axios.get('http://localhost:8001').then(function (response) {
            console.log(response);
        })
        this.props.history.push('/system/dashboard')
    }

    render () {

        const { classes } = this.props
        return(
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon  />
                        </Avatar>
                        <Typography variant="headline">{this.state.signIn}</Typography>
                            <form className={classes.form} 
                            onSubmit={this.handleSubmit}
                            >
                                <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">{this.state.address}</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">{this.state.password}</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                </FormControl>
                                <Button
                                type="submit"
                                // type="button"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={classes.submit}
                                // onClick={this.handleSubmit}
                                >
                                {this.state.signIn}
                                </Button>
                            </form>
                    </Paper>
                </main>
                
            </React.Fragment>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired
  };
  

export default withStyles(styles)(SignIn);