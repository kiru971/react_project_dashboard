import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { data } from "./data";
import { PiTrashDuotone } from "react-icons/pi";
import { BsPencilFill } from "react-icons/bs";
import { BiSolidCheckbox } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";
import { MdAdd } from "react-icons/md";
import {
  CellHead,
  CellName,
  CellSub,
  HeadData,
  MemberButton,
  MemberCard,
  MemberLayout,
  MemberTitle,
  TableButton,
  TableData,
  TrashButton,
} from "./css/member";
import { CardSub } from "../footer/css/footer";

const Member = () => {
  return (
    <MemberCard>
      <MemberLayout>
        <div>
          <MemberTitle>Members Statistics</MemberTitle>
          <CardSub>over 500 members</CardSub>
        </div>
        <MemberButton>
          <MdAdd size={20} /> New Member
        </MemberButton>
      </MemberLayout>
      <div>
        <TableContainer sx={{ marginTop: 2, maxHeight: 370 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableData sx={{ minWidth: "25px" }}>
                  <BiSolidCheckbox
                    size={35}
                    fill={grey[200]}
                    style={{ verticalAlign: "middle" }}
                  />
                </TableData>
                <HeadData>Authors</HeadData>
                <HeadData>Company</HeadData>
                <HeadData>Progress</HeadData>
                <HeadData>Actions</HeadData>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((value, index) => {
                return (
                  <TableRow key={index}>
                    <TableData sx={{ minWidth: "25px" }}>
                      <BiSolidCheckbox
                        size={35}
                        fill={grey[200]}
                        style={{ verticalAlign: "middle" }}
                      />
                    </TableData>
                    <TableData>
                      <CellHead>
                        <div
                          style={{ maxWidth: 60, height: 40 }}
                          className="member"
                        >
                          <img
                            src={value.img}
                            alt="profile"
                            style={{ borderRadius: 7 }}
                          />
                        </div>
                        <CellName>
                          <b>{value.name}</b>{" "}
                          <CellSub>{value.language}</CellSub>
                        </CellName>
                      </CellHead>
                    </TableData>
                    <TableData>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <b>{value.company}</b>
                        <CellSub>{value.work}</CellSub>
                      </div>
                    </TableData>
                    <TableData>
                      <CellSub>{value.progress}%</CellSub>
                      <ProgressBar
                        completed={value.progress}
                        bgColor={value.info}
                        animateOnRender={true}
                        width="100px"
                        height="7px"
                        isLabelVisible={false}
                      />
                    </TableData>
                    <TableData sx={{ minWidth: 100 }}>
                      <TableButton>
                        <BsPencilFill color={grey[400]} />
                      </TableButton>
                      <TrashButton>
                        <PiTrashDuotone color={grey[400]} />
                      </TrashButton>
                    </TableData>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </MemberCard>
  );
};

export default Member;
