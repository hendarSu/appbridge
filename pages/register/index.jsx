import styles from "./../../styles/Home.module.css";

import Layout from "../../components/layout";
import { useState } from "react";

import ToastNotification from "../../components/toast";
import { Button } from "react-bootstrap";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Lakukan logika pendaftaran di sini (misalnya, kirim data ke server)
    } else {
      setShowToast(true);
      setToastMessage("Passwords do not match.");
      setToastColor("bg-warning");
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="mb-5 text-center">
              <p className="h1 font-w700">
                Register <a href="#">WooBridge!</a>
              </p>
            </div>
            <div className="card p-1">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Konfirmasi Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex">
                    <Button
                      type="submit"
                      className="btn btn-primary flex-row-reverse"
                    >
                      Register
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

      <ToastNotification
        show={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
        color={toastColor}
      />
    </Layout>
  );
}
