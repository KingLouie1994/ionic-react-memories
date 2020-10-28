import React from "react";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonFab,
  IonFabButton,
  isPlatform,
} from "@ionic/react";

import MemoriesList from "./MemoriesList";

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
            <IonButtons slot="end">
              <IonButton routerLink="/new-memory">
                <IonIcon slot="icon-only" icon={addOutline} color="red" />
              </IonButton>
            </IonButtons>
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
          <IonFab horizontal="end" vertical="bottom" slot="fixed">
            <IonFabButton color="primary" routerLink="/new-memory">
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default MemoriesContent;
