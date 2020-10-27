import React, { useContext } from "react";

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  isPlatform,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonFab,
  IonFabButton,
} from "@ionic/react";

import { addOutline } from "ionicons/icons";

import MemoriesContext from "../data/memories-context";

const GoodMemories: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);

  const goodMemories = memoriesCtx.memories.filter(
    (memory) => memory.type === "good"
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Good Memories</IonTitle>
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
          <IonRow>
            <IonCol>
              <IonText className="ion-text-center">
                <h4>Here you'll see the good memories!</h4>
              </IonText>
            </IonCol>
          </IonRow>
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

export default GoodMemories;
