import React from "react";

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-3 text-center">
      <div className="container">
        Copyright &copy; {new Date().getFullYear()} DevConnect
      </div>
    </footer>
  );
};
