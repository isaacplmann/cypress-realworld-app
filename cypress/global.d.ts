/// <reference types="cypress" />

declare namespace Cypress {
  import {
    User,
    BankAccount,
    Like,
    Comment,
    Transaction,
    BankTransfer,
    Contact,
  } from "../src/models";

  interface CustomWindow extends Window {
    // TODO: Fix up service types
    authService: any;
    createTransactionService: any;
    publicTransactionService: any;
    contactTransactionService: any;
    personalTransactionService: any;
  }

  interface Chainable {
    window(options?: Partial<Loggable & Timeoutable>): Chainable<CustomWindow>;

    task(
      event: "filter:testData",
      arg?: any,
      options?: Partial<Loggable & Timeoutable>
    ): Chainable<any[]>;

    task(
      event: "find:testData",
      arg?: any,
      options?: Partial<Loggable & Timeoutable>
    ): Chainable<any>;

    task(
      event: "fetchTestData",
      arg?: any,
      options?: Partial<Loggable & Timeoutable>
    ): Chainable<any[]>;

    task(
      event: "fetchTestData",
      arg?: any,
      options?: Partial<Loggable & Timeoutable>
    ): Chainable<any>;

    waitForXstateService(service: string): Chainable<CustomWindow>;

    /**
     * Logs in using user interface
     */
    login(username: string, password: string, rememberUser?: boolean): void;

    /**
     * Logs in using API request
     */
    loginByApi(username: string, password?: string): Chainable<Response>;

    /**
     * Logs in bypassing UI
     */
    loginByXstate(username: string, password?: string): Chainable<any>;

    /**
     * Logs out bypassing UI
     */
    logoutByXstate(): Chainable<void>;

    switchUser(username: string): Chainable<any>;

    /**
     * Create Transaction bypassing UI
     */
    createTransaction(payload): Chainable<any>;

    nextTransactionFeedPage(service: string, page: number): Chainable<any>;

    pickDateRange(startDate: Date, endDate: Date): Chainable<void>;

    getBySel(dataTestAttribute: string, args?: any): Chainable<Element>;
    getBySelLike(dataTestPrefixAttribute: string, args?: any): Chainable<Element>;
    findTestData(
      entity: string,
      query: object,
      log?: boolean
    ): Chainable<
      Transaction | User | BankAccount | Like | Notification | Comment | BankTransfer | Contact
    >;
    filterTestData(
      entity: string,
      query: object,
      log?: boolean
    ): Chainable<
      | Transaction[]
      | User[]
      | BankAccount[]
      | Like[]
      | Notification[]
      | Comment[]
      | BankTransfer[]
      | Contact[]
    >;
    reactComponent(): Chainable<any>;
    setTransactionAmountRange(min: number, max: number): Chainable<any>;
  }
}
