import React from "react";
import styles from "../styles/Message.module.css";

export default function Message({ message, isMe }) {
  if (user) {
    return (
      <div
        className={
          isMe ? styles.sentMessageContainer : styles.receivedMessageContainer
        }
      >
        <p className={styles.senderText}>{message.owner}</p>
        <div className={isMe ? styles.sentMessage : styles.receivedMessage}>
          <p>{message.message}</p>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
