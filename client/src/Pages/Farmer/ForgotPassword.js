import React, { Fragment, useState } from "react";
import "./ForgotPassword.css";
import { forgot_f_password } from "../../actions/f_resetPassword";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ForgotPassword = ({ forgot_f_password, loading }) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.table(formData);
    forgot_f_password({ email });
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

ForgotPassword.propTypes = {
  forgot_f_password: PropTypes.func.isRequired,
  // loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  // loading: state.forgot_f_password.loading,
});
export default connect(mapStateToProps, { forgot_f_password })(ForgotPassword);
