const tab1 = document.querySelector("[href='#tabpanel1']");
const tab2 = document.querySelector("[href='#tabpanel2']");
const tab3 = document.querySelector("[href='#tabpanel3']");

// default active tab and content
document.querySelector('#tabpanel1').classList.add('active');
tab1.parentElement.classList.add('active');

if (tab1) {
  tab1.addEventListener('click', () => {
    // content
    document.querySelector('#tabpanel1').classList.add('active');
    document.querySelector('#tabpanel2').classList.remove('active');
    document.querySelector('#tabpanel3').classList.remove('active');

    // tab
    tab1.parentElement.classList.add('active');
    tab2.parentElement.classList.remove('active');
    tab3.parentElement.classList.remove('active');
  });
}

if (tab2) {
  tab2.addEventListener('click', () => {
    // content
    document.querySelector('#tabpanel1').classList.remove('active');
    document.querySelector('#tabpanel2').classList.add('active');
    document.querySelector('#tabpanel3').classList.remove('active');

    // tab
    tab1.parentElement.classList.remove('active');
    tab2.parentElement.classList.add('active');
    tab3.parentElement.classList.remove('active');
  });
}

if (tab3) {
  tab3.addEventListener('click', () => {
    // content
    document.querySelector('#tabpanel1').classList.remove('active');
    document.querySelector('#tabpanel2').classList.remove('active');
    document.querySelector('#tabpanel3').classList.add('active');

    // tab
    tab1.parentElement.classList.remove('active');
    tab2.parentElement.classList.remove('active');
    tab3.parentElement.classList.add('active');
  });
}