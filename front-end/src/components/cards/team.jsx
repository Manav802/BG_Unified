import React from "react";
import {
  AiFillBehanceCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Box, Image } from "@chakra-ui/core";

function team(props) {
  return (
    <div>
      <div className="team-card">
        <img src={props.img} alt="" />
        <div className="col d-flex p-4 flex-column">
          <span className="display5 mt-4 text-dark">{props.name}</span>
          <span className="h6 text-primary text-secondary">{props.title}</span>
          <p className="mt-3">{props.children}</p>
          <div className="d-flex py-3">
            <a className="mr-2" href="#">
              <Image as={AiFillBehanceCircle} h="24px" w="24px"></Image>
            </a>
            <a className="mr-2" href="#">
              <Image as={AiFillGithub} h="24px" w="24px"></Image>
            </a>
            <a className="mr-2" href="#">
              <Image as={AiFillLinkedin} h="24px" w="24px"></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default team;
