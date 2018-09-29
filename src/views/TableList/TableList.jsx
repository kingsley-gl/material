import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  formLayout:{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing.unit * 5,
  },
  formItem:{
    width: theme.spacing.unit * 50,
    margin: theme.spacing.unit,

  },
  formButton:{
    // width: theme.spacing.unit ,
    marginTop: 20,
  },
  textField:{
    fontWeight: "300",
    fontFamily:"'SimSun', sans-serif",
    textStyle:'BOLD'
  },
});

class TableList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
  render(){
  const { classes } = this.props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <form className={classes.formLayout}>
              <FormControl className={classes.formItem} margin="normal" xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  id="filled-name"
                  label="姓名"
                  value={this.state.name}
                  // onChange={this.handleChange('name')}
                  margin="normal"
                  variant="filled"
                  required 
                />
              </FormControl>
              <FormControl className={classes.formItem} margin="normal" xs={12} sm={6}>
                <TextField
                  id="filled-num"
                  label="电话"
                  value={this.state.num}
                  // onChange={this.handleChange('name')}
                  margin="normal"
                  variant="filled"
                  required 
                />
              </FormControl>
              <FormControl style={{width: 1000, margin:8}} margin="normal" required fullWidth>
                <TextField
                  id="filled-addr"
                  label="地址"
                  
                  value={this.state.name}
                  // onChange={this.handleChange('name')}
                  margin="normal"
                  variant="filled"
                />              
              </FormControl>
              <Button
              type="submit"
              // type="button"
              variant="raised"
              color="primary"
              className={classes.formButton}
              // onClick={this.handleSubmit}
              >
              提交
              </Button>
            </form>
          </CardBody>
        </Card>
      </GridItem>
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem> */}
    </GridContainer>
  );}
}

export default withStyles(styles)(TableList);
