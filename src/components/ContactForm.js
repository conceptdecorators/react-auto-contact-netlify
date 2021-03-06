import { Form, Text } from "informed"; //https://joepuzzo.github.io/informed/
import React from "react";

const SPREADSHEET_ID = "nhlD3E6xsi2lbDQ71HTJ3oQ1Ql5dIkuiK4IoZYjHD"; //from the URL of your blank Google Sheet
const CLIENT_ID =
  "2d280542491u-3aofp4eFeftog7q0u5a73ro566h8vi.apps.googleusercontent.com"; //from https://console.developers.google.com/apis/credentials
const API_KEY = "AIzaSyCz5fYFuCORKGXSGu4IwKq4U_HfcdDtB"; //https://console.developers.google.com/apis/credentials
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this); //to tie the form's callback to this class
  }

  componentDidMount() {
    //called automatically by React
    this.handleClientLoad();
  }

  handleClientLoad = () => {
    //initialize the Google API
    window.gapi.load("client:auth2", this.initClient);
  };

  initClient = () => {
    //provide the authentication credentials you set up in the Google developer console
    window.gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPE,
        discoveryDocs: [
          "https://sheets.googleapis.com/$discovery/rest?version=v4",
        ],
      })
      .then(() => {
        window.gapi.auth2
          .getAuthInstance()
          .isSignedIn.listen(this.updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
        this.updateSignInStatus(
          window.gapi.auth2.getAuthInstance().isSignedIn.get()
        );
      });
  };

  onFormSubmit(submissionValues) {
    const params = {
      // The ID of the spreadsheet to update.
      spreadsheetId: SPREADSHEET_ID,
      // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
      range: "Sheet1", //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
      // How the input data should be interpreted.
      valueInputOption: "RAW", //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
      // How the input data should be inserted.
      insertDataOption: "INSERT_ROWS", //Choose OVERWRITE OR INSERT_ROWS
    };

    const valueRangeBody = {
      majorDimension: "ROWS", //log each entry as a new row (vs column)
      values: [submissionValues], //convert the object's values to an array
    };

    let request = window.gapi.client.sheets.spreadsheets.values.append(
      params,
      valueRangeBody
    );
    request.then(
      function (response) {
        // TODO: Insert desired response behaviour on submission
        console.log(response.result);
      },
      function (reason) {
        console.error("error: " + reason.result.error.message);
      }
    );
  }

  render() {
    //TODO: add your form fields below that you want to submit to the sheet. This just has a name field
    return (
      <Form onSubmit={this.onFormSubmit}>
        <label>
          First name:
          <Text field="name" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    );
  }
}
