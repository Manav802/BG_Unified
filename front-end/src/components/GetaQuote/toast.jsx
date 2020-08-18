import React from "react";
import { useToast } from "@chakra-ui/core";
function Toast(props) {
  const toast = useToast();
  if (
    props.response == "TypeError: Failed to fetch" ||
    props.response.status != 200
  ) {
    var status = "error";
    var description = "Error encountered";
  } else {
    status = "success";
    description = "Response recorded";
  }
  return (
    <>
      {toast({
        title: "Submission Status",
        description: description,
        status: status,
        duration: 9000,
        isClosable: true,
      })}
    </>
  );
}
export default Toast;
