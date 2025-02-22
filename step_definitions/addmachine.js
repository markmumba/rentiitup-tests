const { I } = inject();

Given('I am logged in as an owner', () => {
    I.amOnPage('/login');
    I.fillField('input[name="email"]', 'markmumba01@gmail.com');
    I.fillField('input[name="password"]', 'qwerty1234');
    I.click('button[type="submit"]');
    I.seeInCurrentUrl('/dashboard');
    I.see('Dashboard');
    I.wait(2);
});

Given('I am on the dashboard page', () => {
    I.seeInCurrentUrl('/dashboard');
    I.see('Dashboard');
});

When('I click on the {string} button', (buttonText) => {
    I.click(buttonText);
});

Then('I should be redirected to the add machine page', () => {
    I.seeInCurrentUrl('http://localhost:3000/machines/add');
});


When('I fill in the following machine details:', (table) => {
    table.rows.forEach(async row => {
      const fieldName = row.cells[0].value.toLowerCase().replace(/ /g, '');
      if (fieldName === 'description' || fieldName === 'specification') {
        I.fillField(`textarea[name="${fieldName}"]`, row.cells[1].value);
      } else if (fieldName === 'baseprice') {
        I.fillField('input[name="basePrice"]', row.cells[1].value);
      } else if (fieldName === 'condition') {
        // Target condition dropdown specifically by looking at its current value or nearby label
        I.click('//button[@role="combobox"][.//span[contains(text(), "GOOD")]]');
        I.waitForElement(`//span[contains(text(), '${row.cells[1].value}')]`, 5);
        I.click(`//span[contains(text(), '${row.cells[1].value}')]`);
        I.wait(1); // Give UI time to update
      } else if (fieldName === 'category') {
        // Target category dropdown specifically by looking at its current value or nearby label
        I.click('//button[@role="combobox"][.//span[contains(text(), "Select machine category")]]');
        I.waitForElement(`//span[contains(text(), '${row.cells[1].value}')]`, 5);
        I.click(`//span[contains(text(), '${row.cells[1].value}')]`);
        I.wait(1); // Give UI time to update
      } else {
        I.fillField(`input[name="${fieldName}"]`, row.cells[1].value);
      }
    });
  });

When('I click the {string} submit button', (buttonText) => {
    I.click(buttonText);
});

Then('I should see a success message {string}', (message) => {
    I.see(message);
});

When('I select an image file from my device', () => {
    I.attachFile('input[type="file"]', 'uploads/machine_image.jpg');
});

Then('I should be redirected to the profile page', () => {
    I.seeInCurrentUrl('/profile');
    I.see('Profile');
});
