import React from "react";

import { IonFab, IonFabButton, IonIcon } from "@ionic/react";

const FixedBottomFab: React.FC<{ icon: string; link: string }> = (props) => {
  return (
    <IonFab horizontal="end" vertical="bottom" slot="fixed">
      <IonFabButton color="primary" routerLink={props.link}>
        <IonIcon icon={props.icon} />
      </IonFabButton>
    </IonFab>
  );
};

export default FixedBottomFab;
