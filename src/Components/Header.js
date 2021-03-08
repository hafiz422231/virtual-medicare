import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Header() {
  return (
    <Typography
      style={{
        fontSize: '13pt',
        backgroundColor: "#29aae1",
        color: "white",
        textAlign: "center",
        padding: 1
      }}
    >
      We are not affiliated with Medicare and are non a government site that is
      hosted by Senior Choice Plans a Licensed Health Insurance agency.
    </Typography>
  );
}
