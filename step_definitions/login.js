const { I } = inject();
// Add in your custom step files


Given('I am on the login page', () => {
  I.amOnPage('/login');
});

When('I enter {string} as email', (email) => {
  I.fillField('input[name="email"]', email);
});

When('I enter {string} as password', (password) => {
  I.fillField('input[name="password"]', password);
});

When('I click the login button', () => {
  I.click('button[type="submit"]');
});


Then('I should see the dashboard', () => {
  I.seeInCurrentUrl('/dashboard');
  I.see('Dashboard');  // Adjust based on your dashboard content
});

Then('I should see an error message {string}', (message) => {
  I.see(message);
});

Then('I should see validation errors for empty fields', () => {
  I.see('Email is required');
  I.see('Password must be at least 8 characters');
});