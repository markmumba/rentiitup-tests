const { I } = inject();

Given('I am authenticated as a customer account', () => {
    I.amOnPage('/login');
    I.fillField('input[name="email"]', 'markian.mwangi@riarauniversity.ac.ke');
    I.fillField('input[name="password"]', 'qwerty1234');
    I.click('button[type="submit"]');
    I.seeInCurrentUrl('/dashboard');
    // Add a small wait for the welcome message to load if needed
    I.waitForElement('h1.text-2xl', 5);
    // Match the exact text structure
    I.see('Welcome back, Markian Mumba');
});
Given('I am on the main dashboard', () => {
    I.seeInCurrentUrl('/dashboard');
    I.waitForElement('h1.text-2xl', 5);
    // Match the exact text structure
    I.see('Welcome back, Markian Mumba');
});

When('I click the "Schedule" button in the navigation', () => {
    I.click('Schedule');
});

Then('I should be redirected to the categories page', () => {
    I.seeInCurrentUrl('/categories');
    I.see('Choose by Category');
});

Then('I should see a list of equipment categories', () => {
    I.see('Choose by Category');
});

When('I expand the "Material Handling Equipment" accordion', () => {
    I.click('//button[contains(text(), "Material Handling Equipment")]');
});

Then('I should see the "Browse Category" button', () => {
    I.see('Browse Category');
});

When('I click the "Browse Category" button', () => {
    I.click('Browse Category');
});

Then('I should be redirected to the "Material Handling Equipment" page', () => {
    I.seeInCurrentUrl('http://localhost:3000/categories/1');
    I.see('Material Handling Equipment');
});

Then('I should see a list of available equipment types', async () => {
    // Wait for the card to be visible
    I.waitForElement('.bg-card', 5);
    // Check if the equipment name is visible
    I.see('Mini excavator', '.font-semibold.text-xl');
    // Also verify the price is visible
    I.see('Base Price: ksh20000', '.text-muted-foreground');
});

When('I select "Mini Excavator" from the equipment list', () => {
    // Click the entire card which is more reliable for touch/click events
    I.click('.rounded-xl.bg-card');
    // Wait for navigation or next page load
});

Then('I should be redirected to the detailed "Mini Excavator" page', () => {
    I.seeInCurrentUrl('http://localhost:3000/machines/1');
    I.see('OWNER');
});

Then('I should see the full specifications and availability', () => {
    I.see('Specifications');
});
