export interface Client {
  ClientID: string;
  Name: string;
}

export type NewSubscriber = {
  email: string;
  name: string;
  consentToTrack: 'Yes' | 'No' | 'Unchanged';
};

export type Subscriber = {
  EmailAddress: string;
  Name: string;
  Date: string;
  ListJoinedDate: string;
  State: string;
  ConsentToTrack: string;
};

export type SubscriberListResponse = {
  Results: Subscriber[];
  ResultsOrderedBy: string;
  OrderDirection: string;
  PageNumber: number;
  PageSize: number;
  RecordsOnThisPage: number;
  TotalNumberOfRecords: number;
  NumberOfPages: number;
};
