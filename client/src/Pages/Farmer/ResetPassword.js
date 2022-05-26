import React, { Fragment, useState } from "react";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";
import { reset_f_password } from "../../actions/f_resetPassword";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
// import { Navigate } from "react-router-dom";

const ResetPassword = ({ reset_f_password, setAlert }) => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const { password, confirmPassword } = formData;
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = async (e) => {
    e.preventDefault();
    //const token = serializeFormQuery(e.target);
    console.table(formData);
    if (password !== confirmPassword) {
      setAlert("Password doesn't match.", "error");
    } else {
      reset_f_password({ password });
      return navigate("/FarmerRegistration");
    }
  };

  return (
    // <Fragment>
    //   {loading ? (
    //     <Loader />
    //   ) : (
    <Fragment>
      <p title="Change Password" />
      <div className="resetPasswordContainer">
        <div className="resetPasswordBox">
          <h2 className="resetPasswordHeading">Reset Password</h2>

          <form className="resetPasswordForm" onSubmit={(e) => onSubmit(e)}>
            <div>
              {/* <LockOpenIcon /> */}
              <input
                type="password"
                placeholder="New Password"
                required
                value={password}
                name="password"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="loginPassword">
              {/* <LockIcon /> */}
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                name="confirmPassword"
                onChange={(e) => onChange(e)}
              />
            </div>
            <input
              type="submit"
              value="Update"
              className="resetPasswordBtn"
              // onClick={handleQueryString}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
  //   }
  //   </Fragment>
  // );
};

ResetPassword.propTypes = {
  reset_f_password: PropTypes.func.isRequired,
  setAlert: PropTypes.func,
  // loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  // loading: state.forgot_f_password.loading,
});
export default connect(null, { reset_f_password, setAlert })(ResetPassword);
