import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ApiTestPageComponent } from './views/api-test-page/api-test-page.component';


export const routes: Routes = [
    {path: '' , component : LandingPageComponent},
    {path: 'api' , component : ApiTestPageComponent}



];
