let button = document.getElementById('btn');
let height_status = false;
let weight_status = false;

button.addEventListener('click', () => {
  const height = parseInt(document.getElementById('height-input').value);
  const weight = parseInt(document.getElementById('weight-input').value);
  const result = document.getElementById('output');

  // Clear previous error messages
  document.getElementById('height-error').innerHTML = '';
  document.getElementById('weight-error').innerHTML = '';

  // Validate height
  if (isNaN(height) || height <= 0) {
    document.getElementById('height-error').innerHTML = 'Enter A Valid Height';
  } else {
    height_status = true;
  }

  // Validate weight
  if (isNaN(weight) || weight <= 0) {
    document.getElementById('weight-error').innerHTML = 'Enter A Valid Weight';
  } else {
    weight_status = true;
  }

  if (height_status && weight_status) {
    // Clear previous results
    result.innerHTML = '';

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//Underweight Output
    if (bmi < 18.6) {
      result.innerHTML = "Under Weight: " + bmi;

      let marginText = document.createElement('p');
      result.appendChild(marginText).style.margin = '30px 0 0 0';

      let addText = document.createElement('p');
      addText.textContent = "If your BMI (Body Mass Index) falls into the Underweight category, it indicates that your weight may be insufficient for your height. In such cases, it is advisable to consult with a healthcare professional, such as a doctor or a registered dietitian, to assess your overall health and determine an appropriate course of action. It's important to prioritize a balanced and nutritious diet, engage in regular physical activity, and seek professional advice to address any underlying health concerns associated with being underweight."
      result.appendChild(addText).style.fontSize = 'large';

      let addbutton = document.createElement('button');
      addbutton.className = 'under_button';
      addbutton.textContent = 'See More';
      result.appendChild(addbutton);

      addbutton.addEventListener('click', function () {

        clearCategory('.tips_overweight');
        clearCategory('.exercises_overweight');
        clearCategory('.tips_normal');
        clearCategory('.exercises_normal');
        clearCategory('.tips_underweight');
        clearCategory('.exercises_underweight');

        const exercisesElement = document.querySelector('.exercises');
        const recommendElement = document.querySelector('.recommend');

        exercisesElement.style.width = '450px';
        exercisesElement.style.height = 'auto';
        recommendElement.style.width = '450px';
        recommendElement.style.height = 'auto';


        const underweight_tips = document.querySelectorAll('.tips_underweight');
        underweight_tips.forEach(tips => tips.style.display = 'block');

        const underweight_exercises = document.querySelectorAll('.exercises_underweight');
        underweight_exercises.forEach(exercises => exercises.style.display = 'block');
  
        clearfield();
        if (window.innerWidth <= 700) {
          // Redirect to another page
          window.location.href = './jamesdata.html';
        }
      });
      //Normalweight Output --
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = 'Normal:' + '&nbsp' + bmi;

      let marginText = document.createElement('p');
      result.appendChild(marginText).style.margin = '30px 0 0 0';

      let addText = document.createElement('p');
      addText.textContent = "If your BMI falls into the Normal Weight category, it suggests that your weight is generally considered healthy for your height. To maintain or enhance your well-being, consider the following recommendations:";
      result.appendChild(addText).style.fontSize = 'large';

      let addbutton = document.createElement('button');
      addbutton.className = 'under_button';
      addbutton.textContent = 'See More';
      result.appendChild(addbutton);

      addbutton.addEventListener('click', function () {
        // Clear previous tips and exercises
        clearCategory('.tips_overweight');
        clearCategory('.exercises_overweight');
        clearCategory('.tips_normal');
        clearCategory('.exercises_normal');
        clearCategory('.tips_underweight');
        clearCategory('.exercises_underweight');

        const exercisesElement = document.querySelector('.exercises');
        const recommendElement = document.querySelector('.recommend');

        exercisesElement.style.width = '450px';
        exercisesElement.style.height = 'auto';
        recommendElement.style.width = '450px';
        recommendElement.style.height = 'auto';

        const normal_tips = document.querySelectorAll('.tips_normal');
        normal_tips.forEach(tips => tips.style.display = 'block');

        const normal_exercises = document.querySelectorAll('.exercises_normal');
        normal_exercises.forEach(exercises => exercises.style.display = 'block');

        clearfield();
        if (window.innerWidth <= 700) {
          // Redirect to another page
          window.location.href = './jamesdata.html';
        }
      });

//Overweight Output --
    } else {
      result.innerHTML = 'Overweight: ' + '&nbsp' + bmi;

      let addText = document.createElement('p');
      addText.textContent = "If your BMI (Body Mass Index) indicates that you are in the overweight range, consider adopting a balanced and sustainable approach to improve your overall health. Consult with a healthcare professional or a registered dietitian to create a personalized plan that includes a well-balanced diet, regular physical activity, and lifestyle changes. ";
      result.appendChild(addText).style.fontSize = 'large';

      let addbutton = document.createElement('button');
      addbutton.className = 'under_button';
      addbutton.textContent = 'See More';
      result.appendChild(addbutton);

      addbutton.addEventListener('click', function () {

        clearCategory('.tips_overweight');
        clearCategory('.exercises_overweight');
        clearCategory('.tips_normal');
        clearCategory('.exercises_normal');
        clearCategory('.tips_underweight');
        clearCategory('.exercises_underweight');

        const exercisesElement = document.querySelector('.exercises');
        const recommendElement = document.querySelector('.recommend');



        exercisesElement.style.width = '450px';
        exercisesElement.style.height = 'auto';
        recommendElement.style.width = '450px';
        recommendElement.style.height = 'auto';

        const overweight_tips = document.querySelectorAll('.tips_overweight');
        overweight_tips.forEach(tips => tips.style.display = 'block');

        const overweight_exercises = document.querySelectorAll('.exercises_overweight');
        overweight_exercises.forEach(exercises => exercises.style.display = 'block');

        clearfield();
        if (window.innerWidth <= 700) {
          // Redirect to another page
          window.location.href = './jamesdata.html';
        }
      });
    }
  } else {
    alert('The Form has Errors');
    result.innerHTML = '';
  }
});

function clearCategory(className) {
  const elements = document.querySelectorAll(className);
  elements.forEach(el => el.style.display = 'none');
}

function clearfield() {
  document.getElementById('height-input').value = '';
  document.getElementById('weight-input').value = '';
}
