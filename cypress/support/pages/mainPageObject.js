class MainPageObject {
    get cancelIcon() {
        return cy.get('.shepherd-cancel-icon');
    }

    get dashboardDescription() {
        return cy.get('.dashboard-description');
    }

    cancelIconClick() {
        this.cancelIcon.click();
    }

    assertCorrectDashboardDescription(dashboardDescription) {
        this.dashboardDescription.should('equal', dashboardDescription);
    }
}

export default MainPageObject;