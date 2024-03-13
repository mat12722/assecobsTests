import LoginPageObject from "../support/pages/loginPageObject";
import MainPageObject from "../support/pages/mainPageObject";
import Dayjs from 'dayjs'

const dayjs = new Dayjs();
const loginPage = new LoginPageObject();
const mainPage = new MainPageObject();

describe('template spec', () => {
  beforeEach(() => {
    loginPage.visit();
    cy.viewport(1800, 1500);
  });

  it('should provide an ability to login with correct data', () => {
    loginPage.typeLogin(loginPage.correctUserLogin());
    loginPage.typePassword(loginPage.correctUserPassword());
    loginPage.clickOnLoginButton();
    cy.wait(20000);
    dayjs.format()
    mainPage.cancelIconClick();
    mainPage.assertCorrectDashboardDescription(`Utworzono: ` + dayjs.format('DD.MM.YYYY') + ` ` + dayjs.format('HH:mm') + ` z godz. ` + dayjs.format('HH:mm') + ` | Za okres: od 12.02.2024 do ` + dayjs.format('DD.MM.YYYY') + ` | Wartości netto.`);
    //cy.url().should('eq', 'https://waproanyqa.assecobs.pl/start/dashboard');
  })
})