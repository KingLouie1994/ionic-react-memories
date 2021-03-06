import React, { useContext, useEffect } from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonSpinner,
} from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";

import { Route, Redirect } from "react-router-dom";

import { happyOutline, sadOutline } from "ionicons/icons";

import BadMemories from "./pages/BadMemories";
import GoodMemories from "./pages/GoodMemories";

import MemoriesContext from "./data/memories-context";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const NewMemory = React.lazy(() => import("./pages/NewMemory"));

const App: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);

  const { initContext } = memoriesCtx;

  useEffect(() => {
    initContext();
  }, [initContext]);

  return (
    <IonApp>
      <IonReactRouter>
        <React.Suspense fallback={<IonSpinner />}>
          <IonTabs>
            <IonRouterOutlet id="main">
              <Route exact path="/good-memories">
                <GoodMemories />
              </Route>
              <Route exact path="/bad-memories">
                <BadMemories />
              </Route>
              <Route exact path="/new-memory">
                <NewMemory />
              </Route>
              <Redirect to="/good-memories" />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="good-memories" href="/good-memories">
                <IonIcon icon={happyOutline} />
                <IonLabel>Good Memories</IonLabel>
              </IonTabButton>
              <IonTabButton tab="bad-memories" href="/bad-memories">
                <IonIcon icon={sadOutline} />
                <IonLabel>Bad Memories</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </React.Suspense>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
