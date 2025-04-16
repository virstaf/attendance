"use client";

import { createContext, useState } from "react";

const MemberDobContext = createContext();

export const MemberDobProvider = ({ children }) => {
  const [memberDob, setMemberDob] = useState(null);

  return (
    <MemberDobContext.Provider value={{ memberDob, setMemberDob }}>
      {children}
    </MemberDobContext.Provider>
  );
};

export default MemberDobContext;
