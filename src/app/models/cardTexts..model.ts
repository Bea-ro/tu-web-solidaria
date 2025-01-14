export interface CardText {
  type: string;
  text: string;
}

export interface CardTextAndDetails {
  text: CardText[];
  details: string[];
}
