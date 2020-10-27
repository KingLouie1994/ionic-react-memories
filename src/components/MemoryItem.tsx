import React from "react";

import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";

import "./MemoryItem.css";

const MemoryItem: React.FC<{ image: string; title: string }> = (props) => {
  return (
    <IonCard className="memory-item">
      <img src={props.image} alt={props.title} />
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default MemoryItem;
