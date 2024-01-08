import "./Modal.css";

const EditAccount = () => {
  return (
    <div className="modal-content">
      <span className="edit-account-header">Edit Account</span>

      <div className="main-modal">
        <div className="input-div">
          <label htmlFor="">UserName</label>
          <input type="text" />
        </div>

        <div className="input-div">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>

        <div className="gender">
          <span>Gender</span>
          <select name="" id="">
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
        </div>
        <div className="date-of-birth">
          <h3>Date of Birth</h3>

          <div>
            <input type="text" placeholder="date" />
            <select name="" id="">
              <option value="">January</option>
              <option value="">Febrauary</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
            <input type="text" placeholder="year" />
          </div>
        </div>

        <button className="form-submit-button">Submit</button>
      </div>
    </div>
  );
};

export default EditAccount;
