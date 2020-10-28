import React from "react";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  isPlatform,
} from "@ionic/react";

import MemoriesList from "./MemoriesList";
import FixedBottomFab from "./FixedBottomFab";
import ToolbarAction from "./ToolbarAction";

import { addOutline } from "ionicons/icons";

import { Memory } from "../data/memories-context";

const MemoriesContent: React.FC<{
  title: string;
  fallbackText: string;
  memories: Memory[];
}> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">{props.title}</IonTitle>
          {!isPlatform("android") && (
            <ToolbarAction link="/new-memory" icon={addOutline} />
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {props.memories.length <= 0 && (
            <IonRow>
              <IonCol className="ion-text-center">
                <IonText>
                  <h2>{props.fallbackText}</h2>
                </IonText>
              </IonCol>
            </IonRow>
          )}
          <MemoriesList items={props.memories} />
        </IonGrid>
        {isPlatform("android") && (
          <FixedBottomFab link="/new-memory" icon={addOutline} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default MemoriesContent;
