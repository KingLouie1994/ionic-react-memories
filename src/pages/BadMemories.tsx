import React from "react";

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

const BadMemories: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Bad Memories</IonTitle>
          {!isPlatform("android") && (
            <IonButtons slot="end">
              <IonButton>
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
                <h4>Here you'll see the bad memories!</h4>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
        {isPlatform("android") && (
          <IonFab horizontal="end" vertical="bottom" slot="fixed">
            <IonFabButton color="primary">
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default BadMemories;
