import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiViewerHelperServiceService {
  uiSteps = [
    {
      "name": "home",
      "displayname": "Home",
      "route": "",
      "icon": "",
      "substeps": [

      ]
    },
    {
      "name": "work",
      "route":"mywork",
      "displayname": "My Work",
      "icon": "",
      "substeps": [

      ]
    },
    {
      "name": "tools",
      "route": "tools",
      "displayname": "Tools",
      "icon": "",
      "substeps": [

      ]
    },
    {
      "name": "myworksamples",
      "route": "myworksamples",
      "displayname": "My Work Samples",
      "icon": "",
      "substeps": [

      ]
    },
    {
      "name": "contact",
      "route": "contact",
      "displayname": "Contact",
      "icon": "",
      "substeps": [

      ]
    },
    {
      "name": "skills",
      "route": "skills",
      "displayname": "Skills",
      "icon": "",
      "substeps": [

      ]
    },
  ]

  constructor() { }
}
