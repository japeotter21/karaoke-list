import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonItem, IonInput, IonList, IonNote, IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { personCircle, helpCircle, addOutline, funnelOutline } from 'ionicons/icons';
import './HomePage.css';

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>List 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                    <IonInput label="Search" fill="outline" type="search"></IonInput>
                    <IonList inset>
                        <IonItem >
                            <IonText>Song Name</IonText>
                            <IonNote slot="end">Artist</IonNote>
                        </IonItem>
                        <IonItem >
                            <IonText>Song Name</IonText>
                            <IonNote slot="end">Artist</IonNote>
                        </IonItem>
                        <IonItem >
                            <IonText>Song Name</IonText>
                            <IonNote slot="end">Artist</IonNote>
                        </IonItem>
                        <IonItem>
                            <IonText>Song Name</IonText>
                            <IonNote slot="end">Artist</IonNote>
                        </IonItem>
                        <IonItem >
                            <IonText>Song Name</IonText>
                            <IonNote slot="end">Artist</IonNote>
                        </IonItem>
                    </IonList>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonButtons>
                        <IonButton fill="outline">
                        Sort
                        <IonIcon slot="end" icon={funnelOutline}></IonIcon>
                        </IonButton>
                    </IonButtons>
                    <IonButtons slot="primary">
                        <IonButton fill="solid">
                        Add
                        <IonIcon slot="end" icon={addOutline}></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
    };

    export default Tab1;