/** @jsx h */

import { h } from "preact";
import {FormPanel} from ".";
import { Fragment } from "preact/compat";

export default {
  component: FormPanel,
  title: "FormPanel"
};

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {

  const errors = {};
  if (!values.push_notifications && !values.email_notifications) {
    errors.push_notifications = "Error: Please enable either mobile or web notifications.";
    errors.email_notifications = "Error: Please enable either mobile or web notifications";
  }

  return errors;
};

const testProps = {
  title: "Daily Health Check Reminders",
  description: `How would you like to be reminded to take your daily health check? <br />
      (Note: You can submit a daily health check anytime, via any tool. We just thought
        a friendly reminder might help.)
    `,
  imgUrl: "/dev/img/icon-well-check.png",
  fields: [
    {
      name: "push_notifications",
      type: "checkbox",
      icon: "mobile",
      label: "ASU Mobile App (push notifications)",
      id: "mobile-opt-in",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud`
    },
    {
      name: "email_notifications",
      type: "checkbox",
      label: "Web (email reminders)",
      id: "web-opt-in",
      icon: "desktop",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud`
    },
  ],
  initialValues: {
    push_notifications: true,
    email_notifications: false
  },
  validate,
  onSubmit: (values, actions) => {
    if (!values.push_notifications && !values.email_notifications) {
      console.log("reset the form");
      //actions.resetForm();
      //actions.setErrors({push_notifications: "Error: Cannot disable both notification options"});
      //
    }
      console.log(values, 'THE VALUES');
      console.log(actions, 'THE ACTIONS');
  },
  autoSubmit: true
};

const ExposureProps = {
  title: "Exposure Management Permissions",
  description: `Contact tracing can help ASU understand if you have crossed paths
  with someone (while on campus only) that has been diagnosed with COVID-19. By giving your
  consent, you permit ASU to send you a discreet notificatioon if you've been exposed.`,
  imgUrl: "img/icon-well-check.png",
  fields: [
    {
      name: "share_health_records",
      type: "checkbox",
      icon: "clipboard",
      label: "Share COVID test related health records",
      id: "mobile-opt-in",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud`,
    },
    {
      name: "share_location",
      type: "checkbox",
      label: "Share location",
      id: "web-opt-in",
      icon: "map-pin",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud`,
    },
  ],
  initialValues: {
    share_location: true,
    share_health_records: false,
  },
  onSubmit: (values, actions) => {
    console.log(values, "THE VALUES");
    console.log(actions, "THE ACTIONS");
  },
  autoSubmit: true,
};

export const base = () => (
  <Fragment>
    <FormPanel {...testProps} />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>
);

export const exposureForm = () => (
  <Fragment>
    <FormPanel {...ExposureProps} />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>
);
