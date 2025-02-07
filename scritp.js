document.addEventListener('DOMContentLoaded', function() {
    const addQuestionBtn = document.getElementById('add-question-btn');
    const qaContainer = document.getElementById('qa-container');

    // Yangi savol qo'shish funksiyasi
    addQuestionBtn.addEventListener('click', function() {
        const newQuestion = prompt("Yangi savol kiriting:");
        const newAnswer = prompt("Javobni kiriting:");

        if (newQuestion && newAnswer) {
            const qaItem = document.createElement('div');
            qaItem.classList.add('qa-item');

            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.textContent = newQuestion;

            const answerDiv = document.createElement('div');
            answerDiv.classList.add('answer');
            answerDiv.textContent = newAnswer;

            qaItem.appendChild(questionDiv);
            qaItem.appendChild(answerDiv);

            qaContainer.appendChild(qaItem);

            // Savolga tıklanganda javobni ko'rsatish
            qaItem.addEventListener('click', function() {
                qaItem.classList.toggle('open');
            });
        }
    });

    // Dastlabki savollarni qo'shish
    const questions = [
        { question: 'JavaScript API nima?', answer: 'JavaScript API - bu JavaScript tilida mavjud bo\'lgan vositalar va metodlar to\'plami.' },
        { question: 'Fetch API nima?', answer: 'Fetch API - bu veb-serverlardan ma\'lumot olish uchun ishlatiladigan JavaScript API hisoblanadi.' },
        { question: 'DOM API nima?', answer: 'DOM API - bu veb-sahifadagi HTML va XML hujjatlarining tuzilmasini boshqarish uchun ishlatiladigan JavaScript API hisoblanadi.' }
    ];

    questions.forEach(function(item) {
        const qaItem = document.createElement('div');
        qaItem.classList.add('qa-item');

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.textContent = item.question;

        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.textContent = item.answer;

        qaItem.appendChild(questionDiv);
        qaItem.appendChild(answerDiv);

        qaContainer.appendChild(qaItem);

        // Savolga tıklanganda javobni ko'rsatish
        qaItem.addEventListener('click', function() {
            qaItem.classList.toggle('open');
        });
    });
});
