import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchLabels() {
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.checkedA}
          onChange={handleChange("checkedA")}
          value="checkedA"
        />
      }
      label="List"
    />
  );
}
