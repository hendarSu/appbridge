import Layout from "../../components/layout";
import { useState } from "react";

import ToastNotification from "../../components/toast";
import { Button } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      setShowToast(true);
      setToastMessage("Passwords do not match.");
      setToastColor("bg-warning");
  };

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="mb-5 text-center">
              <p className="h1 font-w700">
                Login WooBridge!
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
                  <div className="d-flex flex-row-reverse">
                    <Button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Login
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
