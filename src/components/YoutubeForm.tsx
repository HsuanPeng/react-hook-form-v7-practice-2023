import React from "react";

const YoutubeForm = () => {
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="channel">Channel</label>
      <input type="text" id="channel" name="channel" />

      <button>Submit</button>
    </div>
  );
};

export default YoutubeForm;
