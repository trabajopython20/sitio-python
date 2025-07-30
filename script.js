    // Mostrar la sección de inicio por defecto
        document.addEventListener('DOMContentLoaded', function() {
            showSection('inicio');
        });

        function showSection(sectionId) {
            // Ocultar todas las secciones
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => section.style.display = 'none');
            
            // Mostrar la sección seleccionada
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
            
            // Actualizar elementos activos del menú
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => item.classList.remove('active'));
            event.target.classList.add('active');
        }

        function checkQuiz() {
            const answers = {
                q1: 'b', // Guido van Rossum
                q2: 'b', // 1991
                q3: 'b', // Monty Python's Flying Circus
                q4: 'c', // Es fácil de leer y escribir
                q5: 'b'  // Interpretado
            };
            let score = 0;
            let total = Object.keys(answers).length;

            for (let question in answers) {
                const selected = document.querySelector(`input[name="${question}"]:checked`);
                if (selected && selected.value === answers[question]) {
                    score++;
                }
            }
            const resultDiv = document.getElementById('quiz-result');
            const percentage = (score / total * 100).toFixed(1);  
            let message = '';
            if (percentage >= 80) {
                message = '¡Excelente! Tienes un buen dominio del tema.';
            } else if (percentage >= 60) {
                message = 'Bien. Revisa algunos conceptos y vuelve a intentar.';
            } else {
                message = 'Necesitas estudiar más. Te recomiendo revisar el material.';
            }
            resultDiv.innerHTML = `
                <div>
                    <strong>Puntuación: ${score}/${total} (${percentage}%)</strong>
                    <br>${message}
                </div>
            `;
        }

        function checkExercise(exerciseNum) {
            const answers = {
                1: 'base * altura',
                2: '>',
                3: 'append',
                4: 'range',
                5: 'def'
            };
            const input = document.getElementById(`ex${exerciseNum}`);
            const result = document.getElementById(`result${exerciseNum}`);
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = answers[exerciseNum].toLowerCase();

            if (userAnswer === correctAnswer) {
                result.innerHTML = '<div><strong>¡Correcto! Bien hecho.</strong></div>';
            } else {
                result.innerHTML = `<div><strong>Incorrecto.</strong> La respuesta correcta es: ${answers[exerciseNum]}</div>`;
            }
        }