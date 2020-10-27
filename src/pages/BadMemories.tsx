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

import MemoriesList from "../components/MemoriesList";

const BadMemories: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);

  const badMemories = memoriesCtx.memories.filter(
    (memory) => memory.type === "bad"
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Bad Memories</IonTitle>
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
          {badMemories.length <= 0 && (
            <IonRow>
              <IonCol className="ion-text-center">
                <IonText>
                  <h2>No bad memories found</h2>
                </IonText>
              </IonCol>
            </IonRow>
          )}
          <MemoriesList items={badMemories} />
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

export default BadMemories;
