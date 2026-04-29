import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.scss";
import type { LoginCredentials } from "../../types/login";

const Login = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(""); // Clear error when user types
  };

  const handleLogin = () => {
    // Check if fields are empty
    if (!credentials.email || !credentials.password) {
      setError("Please fill in all fields");
      return;
    }

    // Show loading state
    setLoading(true);
    setError("");

    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      // Redirect to dashboard
      navigate("/dashboard");
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-left">
          <img src="/pablo-sign-in_1-removebg-preview.png" alt="Pablo Sign In Image" />
        </div>
        <div className="login-right">
          <div className="login-form-wrapper">
            <p className="login-title">Welcome!</p>
            <p className="login-subtitle">Enter details to login.</p>

            {/* Error Message */}
            {error && <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>{error}</p>}

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="login-input"
              value={credentials.email}
              onChange={handleInputChange}
              disabled={loading}
            />

            {/* Password Input */}
            <div className="login-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="login-input"
                value={credentials.password}
                onChange={handleInputChange}
                disabled={loading}
              />
              <span
                className="login-password-toggle"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            </div>

            {/* Forgot Password Link */}
            <a href="#" className="login-forgot-password">
              FORGOT PASSWORD?
            </a>

            {/* Login Button */}
            <button
              className="login-button"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "LOGGING IN..." : "LOG IN"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
