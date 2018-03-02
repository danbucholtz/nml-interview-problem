import { Component, Listen, State } from '@stencil/core';

import { loadUnsplashData, UnsplashDto } from '../../utils/unsplash-api';

@Component({
  tag: 'list-page',
  styleUrl: 'list-page.css'
})
export class ListPage {

  @State() dtos: UnsplashDto[] = [];

  componentDidLoad() {
    return this.getData();
  }

  @Listen('ionInput')
  searchInputChanged(event: CustomEvent) {
    return this.getData((event.target as any).value)
  }

  getData(searchTerm?: string) {
    return loadUnsplashData(searchTerm).then((dtos) => {
      this.dtos = dtos;
    });
  }

  render() {
    const listItems = this.dtos.map(dto => {
      return <ion-item>
        <ion-thumbnail slot="start">
          <img src={dto.thumbUrl}></img>
        </ion-thumbnail>
        <ion-label>
          <h2>{dto.name}</h2>
          <p>{dto.bio}</p>
          <p>&nbsp;</p>
          <p>{dto.location}</p>
        </ion-label>
      </ion-item>
    });

    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Unsplash</ion-title>
          <ion-searchbar place-holder="Surfing" ></ion-searchbar>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-list>
          {listItems}
        </ion-list>
      </ion-content>
    ];
  }
}
