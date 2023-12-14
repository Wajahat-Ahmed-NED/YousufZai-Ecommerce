import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@material-ui/icons/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

const data1 = [
  {
    comment: "Nice comment 1",
    commentedBy: "John Doe",
    commentDate: "12/3/23",
    reply: [
      {
        comment: "Nice comment 1",
        commentedBy: "John Doe",
        commentDate: "12/3/23",
      },
    ],
  },
  {
    comment: "Nice comment 2",
    commentedBy: "Jane Smith",
    commentDate: "12/4/23",
    reply: [
      {
        comment: "Nice comment 1",
        commentedBy: "John Doe",
        commentDate: "12/3/23",
      },
    ],
  },
  // Add more comments as needed
];

export default function BasicModal({ title }) {
  const [open, setOpen] = React.useState(false);
  const [addModal, setAddModal] = React.useState(false);
  const [comm, setComm] = React.useState("");
  const [data, setData] = React.useState([]);
  const [id, setId] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setData(data1);
  }, []);
  const AddComment = () => {
    if (comm != "") {
      let obj = {
        comment: comm,
        commentedBy: "Wajahat Test",
        commentDate: new Date().toLocaleDateString(),
        reply: [],
      };
      data.unshift(obj);
      setData(data);
      setAddModal(false);
      setComm("");
    }
  };
  const Reply = () => {
    if (comm != "") {
      let obj = {
        comment: comm,
        commentedBy: "Wajahat Reply Test",
        commentDate: new Date().toLocaleDateString(),
      };
      data[id].reply.push(obj);
      setData(data);
      setAddModal(false);
      setComm("");
      setId(null);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" color="secondary">
        View Comments
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            style={{ fontFamily: "sans-serif", textAlign: "center" }}
          >
            Comments - {title}
          </Typography>
          <br />
          <hr />
          <br />

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setAddModal(true)}
          >
            Add Comment
          </Button>
          <br />
          <br />
          <br />

          {data?.map((comment, index) => (
            <Box key={index} mb={2}>
              <Typography variant="subtitle1">
                {comment.commentedBy} - {comment.commentDate}{" "}
                <DeleteIcon
                  color="error"
                  fontSize="small"
                  style={{ pointer: "cursor" }}
                  onClick={() => {
                    data.splice(index, 1);
                    setData([...data]);
                  }}
                />
              </Typography>
              <Box
                p={2}
                mt={1}
                borderRadius={4}
                bgcolor="#f5f5f5"
                boxShadow={1}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p style={{ fontFamily: "cursive" }}>{comment.comment}</p>
                <Button
                  color="secondary"
                  onClick={() => {
                    setId(index);
                    setAddModal(true);
                  }}
                >
                  Reply
                </Button>
              </Box>
              {comment.reply?.map((e, i) => (
                <Box p={2} mt={1} ml={15}>
                  <Typography variant="subtitle1">
                    {e.commentedBy} - {e.commentDate}{" "}
                    <DeleteIcon
                      color="error"
                      fontSize="small"
                      style={{ pointer: "cursor" }}
                      onClick={() => {
                        data[index].reply.splice(i, 1);
                        setData([...data]);
                      }}
                    />
                  </Typography>

                  <Box p={2} borderRadius={4} bgcolor="#f5f5f5" boxShadow={1}>
                    <p style={{ fontFamily: "cursive" }}>{e.comment}</p>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Modal>

      <Modal
        open={addModal}
        onClose={() => setAddModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: "30%", height: "20%" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Comment
          </Typography>
          <br />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            size="small"
            fullWidth
            value={comm}
            onChange={(e) => setComm(e.target.value)}
          />
          <br />
          <br />
          <br />
          <Button
            fullWidth
            color="secondary"
            variant="contained"
            onClick={() => {
              !id ? AddComment() : Reply();
            }}
          >
            {!id ? "Add Comment" : "Reply"}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
