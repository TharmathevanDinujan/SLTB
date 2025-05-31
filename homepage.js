const dropdown = document.getElementById('cityDropdown');
const dropdownText = document.getElementById('dropdownText');
const dropdownMenu = document.getElementById('dropdownMenu');

const dropdownTo = document.getElementById('cityDropdownTo');
const dropdownTextTo = document.getElementById('dropdownTextTo');
const dropdownMenuTo = document.getElementById('dropdownMenuTo');

// Toggle FROM dropdown
dropdown.addEventListener('click', (e) => {
  e.stopPropagation(); // Stop bubbling
  dropdown.classList.toggle('open');
  dropdownTo.classList.remove('open');
});

// Toggle TO dropdown
dropdownTo.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownTo.classList.toggle('open');
  dropdown.classList.remove('open');
});

// Selecting an item in the FROM dropdown
dropdownMenu.addEventListener('click', (e) => {
  e.stopPropagation(); // Stop bubbling to prevent immediate closure
  if (e.target.tagName === 'DIV') {
    dropdownText.textContent = e.target.textContent;
    dropdown.classList.remove('open');
    dropdownTo.classList.remove('open');
  }
});

// Selecting an item in the TO dropdown
dropdownMenuTo.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.tagName === 'DIV') {
    dropdownTextTo.textContent = e.target.textContent;
    dropdownTo.classList.remove('open');
    dropdown.classList.remove('open');
  }
});

// Close both dropdowns if clicking outside
document.addEventListener('click', () => {
  dropdown.classList.remove('open');
  dropdownTo.classList.remove('open');
});

const calendarIcon = document.getElementById('calendarIcon');
const hiddenDatePicker = document.getElementById('hiddenDatePicker');
const selectedDateSpan = document.getElementById('selectedDate');

// No need to .click() on hidden input — we rely on pointer events
calendarIcon.addEventListener('click', () => {
  hiddenDatePicker.focus(); // Focus to open date picker
});

// Update displayed date when user selects a date
hiddenDatePicker.addEventListener('change', (e) => {
  const dateValue = e.target.value; // yyyy-mm-dd
  if (dateValue) {
    const dateObj = new Date(dateValue);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    selectedDateSpan.textContent = formattedDate;
  }
});


