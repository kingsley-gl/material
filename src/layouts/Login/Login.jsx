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
import { Alert } from 'antd';
import 'antd/dist/antd.css'




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
    warning: {
        margin: theme.spacing.unit
    }
});

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            warndisplay: "none",
        };

    }
    handleSubmit = (event) => {
        axios.get('http://localhost:8001').then(function (response) {
            console.log(response);
        })
        if (this.state.email == 'admin' && this.state.password == '123456') {
            this.props.history.push('/system/dashboard')
        }
        else {
            this.setState({ warndisplay: "block" })
        }
        event.preventDefault();


    }

    handleChange = (event) => {
        let a = event.target.id
        this.setState({ [event.target.id]: event.target.value })
    }
    render() {

        const { classes } = this.props
        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">登录</Typography>
                        <div className={classes.warning} >
                            <Alert
                                message="登录错误"
                                description="账号和密码不匹配，请重新尝试！"
                                type="error"
                                showIcon
                                style={{display: this.state.warndisplay}}
                            />
                        </div>
                        <form className={classes.form}
                            onSubmit={this.handleSubmit}
                        >
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">账号</InputLabel>
                                <Input id="email"
                                    name="email"
                                    autoComplete="email"
                                    // value={this.state.email}
                                    onChange={this.handleChange}
                                    autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">密码</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    // value={this.state.email}
                                    onChange={this.handleChange}
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
                                登录
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