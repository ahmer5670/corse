import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      setError("❌ بيانات الدخول غير صحيحة");
      return;
    }

    localStorage.setItem("loggedInUser", username);
    navigate("/");
  };

  return (
    <div className="signup">
      <h2 style={{ padding: "0.7rem", marginBottom: "3rem" }}>تسجيل الدخول</h2>

      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <label>User Name</label>
        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <div>
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
        <button type="submit">دخول</button>
        {error && (
          <p
            style={{
              background: "red",
              width: "13rem",
              padding: "4px",
              borderRadius: "8rem",
            }}
          >
            {error}
          </p>
        )}
      </form>

      <p style={{ position: "absolute", bottom: "4rem", cursor: "pointer" }}>
        ماعندكش حساب؟{" "}
        <span onClick={() => navigate("/signup")}>إنشاء حساب</span>
      </p>
      <p
        style={{
          position: "absolute",
          right: "10px",
          bottom: "4rem",
          cursor: "pointer",
        }}
      >
        هل نسيت
        <span> الرقم السري؟</span>
      </p>
    </div>
  );
}
