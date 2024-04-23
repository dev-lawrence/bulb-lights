const onSwitch = document.querySelector('#on');
const radioButtons = document.querySelectorAll('.switch__wrapper input');
const light = document.querySelector('.light');

// Function to enable light
const enableLight = () => {
  light.classList.add('showLight');
  document.querySelector('h1').classList.add('active');
  document.querySelector('.audio').play();
};

// Function to disable light
const disableLight = () => {
  light.classList.remove('showLight');
  document.querySelector('h1').classList.remove('active');
  document.querySelector('.audio').play();
};

// Function for on/off switch
radioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (onSwitch.checked) {
      enableLight();
    } else {
      disableLight();
    }
  });
});
