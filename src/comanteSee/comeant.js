import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Chip from "@mui/joy/Chip";
import Rating from "@mui/material/Rating";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useState } from "react";
import "./comeant.css";
// Commented out code
export default function Comeant() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [star, setStar] = useState("");

  // مصفوفة فيها كل العناصر اللي المستخدم أضافها
  const [items, setItems] = useState([]);

  // دالة الإضافة
  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    // تأكيد إن المستخدم كتب حاجة
    if (
      name.trim() === "" ||
      title.trim() === "" ||
      desc.trim() === "" ||
      star.trim() === ""
    ) {
      alert("من فضلك املأ كل الخانات");
      return;
    }

    // إنشاء العنصر الجديد
    const newItem = { name, title, desc, star };

    // نضيفه في المصفوفة القديمة
    setItems((prevItems) => [...prevItems, newItem]);

    // نفرّغ الإيمبوت بعد الإضافة
    setName("");
    setTitle("");
    setDesc("");
    setStar("");
  };

  return (
    <>
      <div className="comeant">
        <div className="send-coment">
          <h1>see</h1>
          <form>
            <label>Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Enter Name"
            />
            <br />
            <label>Email:</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter Email"
            />
            <br />
            <label>Comment:</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              name="comment"
            ></textarea>
            <br />
            <Stack
              style={{ marginLeft: "3rem" }}
              direction="row"
              spacing={2}
              useFlexGap
            >
              <Rating
                defaultValue={star}
                onChange={(e) => setStar(e.target.value)}
                size="small"
              />
            </Stack>

            <button onClick={handleSubmit} className="btn-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="receiver-coment">
          {items.length === 0 ? (
            <p style={{ color: "#777" }}>مافيش بيانات لسه</p>
          ) : (
            items.map((item, index) => (
              <div key={index}>
                <div className="receiver-name">
                  <AccountCircleIcon className="icon-receiver" />
                  <h3>{item.name}</h3>
                </div>
                <Stack
                  className="النجوم"
                  direction="row"
                  spacing={2}
                  useFlexGap
                >
                  <Rating defaultValue={item.star} size="small" />
                </Stack>

                <h4 style={{ textAlign: "right", marginTop: "-2.3rem" }}>
                  {item.title}
                </h4>
                <br />
                <hr style={{ width: "90%" }} />
                <br />
                <p className="p-see">{item.desc}</p>

                <hr
                  style={{
                    width: "101.4%",
                    height: "2px",
                    background: "black",
                    marginTop: "10px",
                  }}
                />
              </div>
            ))
          )}
        </div>
        {/* see */}
        {/* <div className="comeant-see">
          <h1>see</h1>
          <form>
            <label>Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Enter Name"
            />
            <br />
            <label>Email:</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter Email"
            />
            <br />
            <label>Comment:</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              name="comment"
            ></textarea>
            <br />
            <Stack
              style={{ marginLeft: "3rem" }}
              direction="row"
              spacing={2}
              useFlexGap
            >
              <Rating
                defaultValue={star}
                onChange={(e) => setStar(e.target.value)}
                size="small"
              />
            </Stack>

            <button onClick={handleSubmit} className="btn-submit" type="submit">
              Submit
            </button>
          </form>
        </div> */}
        {/* coment */}
        {/* <div className="coment-see">
          {items.length === 0 ? (
            <p style={{ color: "#777" }}>مافيش بيانات لسه</p>
          ) : (
            items.map((item, index) => (
              <div key={index}>
                <div>
                  <AccountCircleIcon
                    style={{
                      marginLeft: "-30rem",
                      marginBottom: "-4.2rem",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                  <h3 style={{ marginRight: "7rem" }}>{item.name}</h3>
                </div>
                <Stack
                  style={{ marginLeft: "3rem" }}
                  direction="row"
                  spacing={2}
                  useFlexGap
                >
                  <Rating defaultValue={item.star} size="small" />
                </Stack>

                <h4 style={{ textAlign: "right", marginTop: "-2.3rem" }}>
                  {item.title}
                </h4>
                <br />
                <hr style={{ width: "90%" }} />
                <br />
                <p className="p-see">{item.desc}</p>

                <hr
                  style={{
                    width: "101.4%",
                    height: "2px",
                    background: "black",
                    marginTop: "10px",
                  }}
                />
              </div>
            ))
          )}
        </div> */}
      </div>
    </>
  );
}
