import React from "react";

import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Welcome;
