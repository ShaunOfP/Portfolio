import { Routes } from '@angular/router';
import { LandingPageContentComponent } from './landing-page-content/landing-page-content.component'
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: LandingPageContentComponent},
    { path: 'imprint', component: ImprintComponent},
    { path: 'privacy-policy', component: PrivacyPolicyComponent}
];