import "./sginandloge.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.username === username)) {
      setError("⚠️ الاسم موجود بالفعل");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ تم إنشاء الحساب بنجاح!");
    navigate("/login");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="signup">
      <h2 style={{ padding: "0.7rem", marginBottom: "3rem" }}>إنشاء حساب</h2>

      <form onSubmit={handleSignup}>
        <label>User Name</label>
        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div>
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            style={{ background: "none", border: "none", marginLeft: "-2rem" }}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "اخفاء" : "اظهار"}
          </button>
        </div>
        <button type="submit">تسجيل</button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>

      <p style={{ cursor: "pointer" }}>
        عندك حساب؟ <span onClick={() => navigate("/login")}>تسجيل الدخول</span>
      </p>
    </div>
  );
}
