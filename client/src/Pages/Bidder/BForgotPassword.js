import React, { Fragment, useState } from "react";
import "./ForgotPassword.css";
import { forgot_b_password } from "../../actions/b_resetPassword";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "@mui/material";

const BForgotPassword = ({ forgot_b_password, loading }) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.table(formData);
    forgot_b_password({ email });
  };

  return (
    // <Fragment>
    //   {loading ? (
    //     <Loader />
    //   ) : (
    <Fragment>
      <p title="Forgot Password" />
      <div className="forgotPasswordContainer">
        <div className="forgotPasswordBox">
          <h2 className="forgotPasswordHeading">Forgot Password</h2>

          <form className="forgotPasswordForm" onSubmit={(e) => onSubmit(e)}>
            <div className="forgotPasswordEmail">
              {/* <MailOutlineIcon /> */}
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div>

            <input type="submit" value="Send" className="forgotPasswordBtn" />
          </form>
        </div>
      </div>
    </Fragment>
    //   )
    // }
    // </Fragment>
  );
};

BForgotPassword.propTypes = {
  forgot_b_password: PropTypes.func.isRequired,
  // loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  // loading: state.forgot_f_password.loading,
});
export default connect(mapStateToProps, { forgot_b_password })(BForgotPassword);
