import React, { useState } from "react";

const TeamMatesForm = (props) => {
  const [member, setMember] = useState({ name: "", email: "", role: ""});

  const handleChanges = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: ""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Enter Title"
        onChange={handleChanges}
        value={member.title}
        name="name"
      />
      <label htmlFor="email">Email</label>
      <textarea
        id="email"
        placeholder="Add your note here."
        value={member.body}
        onChange={handleChanges}
        name="email"
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        placeholder="role"
        onChange={handleChanges}
        value={member.title}
        name="role"
      />
      <button type="submit">Add Member</button>
    </form>
  );
};
export default TeamMatesForm;
