import React, { Component } from "react";
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table";
import TableHeade from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const customers = [
  //보내줄 데이터 작성
  {
    id: "1",
    image: "https://placeimg.com/64/64/3",
    name: "홍길동",
    birthday: "940314",
    gender: "남자",
    job: "학생",
  },
  {
    id: "2",
    image: "https://placeimg.com/64/64/1",
    name: "뫄뫄뫄",
    birthday: "940512",
    gender: "남자",
    job: "학생",
  },
  {
    id: "3",
    image: "https://placeimg.com/64/64/2",
    name: "솨솨솨",
    birthday: "940584",
    gender: "남자",
    job: "학생",
  },
];

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Customer
//           id={customers[0].id}
//           image={customers[0].image}
//           name={customers[0].name}
//           birthday={customers[0].birthday}
//           gender={customers[0].gender}
//           job={customers[0].job}
//         />
//         <Customer
//           id={customers[1].id}
//           image={customers[1].image}
//           name={customers[1].name}
//           birthday={customers[1].birthday}
//           gender={customers[1].gender}
//           job={customers[1].job}
//         />
//         <Customer
//           id={customers[2].id}
//           image={customers[2].image}
//           name={customers[2].name}
//           birthday={customers[2].birthday}
//           gender={customers[2].gender}
//           job={customers[2].job}
//         />
//       </div>
//     );
//   }
// }

//map반복문을 사용해서 줄이기
class App extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHeade>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHeade>
          <TableBody>
            {customers.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
