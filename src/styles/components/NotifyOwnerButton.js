import React, { useState } from "react";

const NotifyOwnerButton = () => {
  const [notified, setNotified] = useState(false);

  const handleNotify = async () => {
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/23473502/uoeyzbk/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          page: window.location.href,
          userAgent: navigator.userAgent
        })
      });
      setNotified(true);
    } catch (err) {
      console.error("Error sending notification", err);
    }
  };

  return (
    <button onClick={handleNotify} disabled={notified} style={{
      padding: "10px 20px",
      borderRadius: "8px",
      backgroundColor: "#5b49ff",
      color: "white",
      border: "none",
      cursor: "pointer"
    }}>
      {notified ? "Owner Notified ✅" : "Reach out to us quickly !!"}
    </button>
  );
};

export default NotifyOwnerButton;
