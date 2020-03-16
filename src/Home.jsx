import React, { useState, useRef } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupButtonDropdown,
  Button,
  Label,
  Alert
} from "reactstrap";

import Header from "./Header";
import validate from "./validate";
import APICaller from "./APICaller";
import Loading from "./Loading";

const apiBaseUrl = process.env.REACT_APP_SERVER_URL;

export default function Home() {
  const [expireTime, setexpireTime] = useState(-1);
  const [url, seturl] = useState("");
  const [warning, setwarning] = useState("");
  const [loading, setloading] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function onDismiss() {
    setwarning("");
  }
  function onDismissCopy() {
    setCopySuccess("");
  }
  function onChangeInput(event) {
    setwarning("");
    setCopySuccess("");
    seturl(event.target.value);
  }
  function handleShorten() {
    setCopySuccess("");
    if (!validate(url)) setwarning("Please enter valid url");
    else if (url.includes(apiBaseUrl)) setwarning("URL is already shorten");
    else {
      setloading(true);
      setwarning("");

      APICaller({
        method: "POST",
        data: { url, expireTime: expireTime * 60 * 60 }
      })
        .then(res => {
          const { hash = "" } = res.data;
          seturl(`${apiBaseUrl}/${hash}`);
          setloading(false);
        })
        .catch(err => {
          const {
            data: { message = "" }
          } = err.response;
          setloading(false);
          setwarning(message);
        });
    }
  }
  function copyToClipboard(e) {
    setwarning("");
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  }

  return (
    <div className="Home flex_col">
      <Header />
      <div className="body flex_col center">
        <Alert
          color="danger"
          isOpen={warning.length ? true : false}
          toggle={onDismiss}
          className="warning-alert"
        >
          {warning}
        </Alert>
        <Alert
          color="success"
          isOpen={copySuccess.length ? true : false}
          toggle={onDismissCopy}
          className="warning-alert"
        >
          <h5>{copySuccess}</h5>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </Alert>
        <div className="inputcontainer">
          <div className="center time_box">
            <Label className="time_box_label">URL expiry time</Label>
            <FormGroup>
              <Input
                type="select"
                name="expireTime"
                value={expireTime}
                onChange={event => setexpireTime(event.target.value)}
              >
                <option value={1}>1 Hour</option>
                <option value={6}>6 Hours</option>
                <option value={12}>12 Hours</option>
                <option value={24}>24 Hours</option>
                <option value={-1}>Never</option>
              </Input>
            </FormGroup>
          </div>
          <InputGroup size="lg">
            <Input
              value={url}
              name="url"
              innerRef={textAreaRef}
              onChange={onChangeInput}
            />
            <InputGroupButtonDropdown addonType="append">
              <Button
                className="Input-btn"
                outline
                color="primary"
                onClick={handleShorten}
                disabled={loading}
              >
                {loading ? <Loading /> : "Shorten"}
              </Button>
              <Button
                className="Input-btn"
                outline
                color="success"
                onClick={copyToClipboard}
                disabled={!url.includes(apiBaseUrl)}
              >
                Copy
              </Button>
            </InputGroupButtonDropdown>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
